/* eslint-disable prettier/prettier */

import { Column, ViewEntity } from "typeorm";

@ViewEntity({
   name:"aires_filtered",
   expression:`(select zone.id as zoneId, aire.idaire as aireId, zone.libelle_zone,aire.libelle_aire , aire.zoneId as aireZoneId from aire inner join zone on aire.zoneId = zone.id);`
})
export class FilteredAire {

    @Column({
        name:"aireZoneId"
    })
    aireZoneId:number;
    @Column({
        name:"zoneId"
    })
    
    zoneId :number;

    @Column({
        name:"aireId"
    }) 
    aireId :number;

    @Column({
        name:"libelle_zone"
    }) 
    labelZone :string;

    @Column({
        name:"libelle_aire"
    }) 
    labelAire :string;
}
