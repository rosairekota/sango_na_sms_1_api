import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ChildEntity } from './child.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddChildDto } from './dto/add-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { ChildRegistrationEntity } from 'src/child-registration/child-registration.entity';
import { CentreEntity } from 'src/centre/centre.entity';
import { Connection } from 'typeorm';

@Injectable()
export class ChildService {
  constructor(
    @InjectRepository(ChildEntity)
    private readonly childRepository: Repository<ChildEntity>,
    @InjectRepository(ChildRegistrationEntity)
    private childRegistrationRepository: Repository<ChildRegistrationEntity>,
    @InjectRepository(CentreEntity)
    private readonly centreRepository: Repository<CentreEntity>,
    private connection: Connection,
  ) {}

  async findAll(): Promise<ChildEntity[]> {
    return await this.childRepository.find();
  }

  async findById(id: number): Promise<ChildEntity> {
    const child = await this.childRepository.findOne(id);
    if (!child) throw new NotFoundException("Cet enregistrement n'existe pas");
    return child;
  }

  async add(newChild: AddChildDto): Promise<ChildEntity> {
    const {
      name,
      lastName,
      firstName,
      gender,
      birthPlace,
      birthDate,
      homeBirth,
      childAdress,
      motherName,
      dateOfBirthMother,
      motherPhone,
      registrationState,
      center,
    } = newChild;
    const centreEntity = this.centreRepository.create({ ...center });
    const centreRepo = await this.centreRepository.findOne(centreEntity);
    const childEntity = this.childRepository.create({
      name,
      lastName,
      firstName,
      gender,
      birthPlace,
      birthDate,
      homeBirth,
      childAdress,
      motherName,
      dateOfBirthMother,
      motherPhone,
    });

    // manage transaction:

    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const childRepo = await queryRunner.manager.save(childEntity);
      if (childRepo && centreRepo) {
        const ChildRegistrationEntity = this.childRegistrationRepository.create(
          { registrationState },
        );
        ChildRegistrationEntity.centre = centreRepo;
        ChildRegistrationEntity.child = childRepo;

        await queryRunner.commitTransaction();
        console.log('La transaction a réussi !');
        return childRepo;
      }
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw new Error('Une erreur est survenue');
    } finally {
      await queryRunner.release();
    }
    return null;
  }

  async update(
    id: number,
    child: Partial<UpdateChildDto>,
  ): Promise<ChildEntity> {
    const childUpdate = await this.childRepository.preload({ id, ...child });
    return await this.childRepository.save(childUpdate);
  }

  async delete(id: number) {
    const child = await this.findById(id);
    return await this.childRepository.remove(child);
  }
}
