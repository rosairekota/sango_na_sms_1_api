/* eslint-disable prettier/prettier */

import { Column, ViewEntity } from "typeorm";

@ViewEntity({
   name:"zones_filtered",
   expression:`(select province.id as provinceId, zone.id as zoneId, province.libelle_province,zone.libelle_zone , zone.provinceId as zoneProvinceId from zone inner join province on zone.provinceId = province.id);`
})
export class Filteredzone {

    @Column({
        name:"zoneProvinceId"
    })
    provinceZoneId:number;
    @Column({
        name:"provinceId"
    })
    
    provinceId :number;

    @Column({
        name:"zoneId"
    }) 
    zoneId :number;

    @Column({
        name:"libelle_province"
    }) 
    labelProvince :string;

    @Column({
        name:"libelle_zone"
    }) 
    labelZone :string;
}
