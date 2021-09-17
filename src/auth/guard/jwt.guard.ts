import { Injectable } from '@nestjs/common';
import { AuthGuard as AuthPassportGuard } from '@nestjs/passport';

@Injectable()
export class JwtGuard extends AuthPassportGuard('jwt') {}
