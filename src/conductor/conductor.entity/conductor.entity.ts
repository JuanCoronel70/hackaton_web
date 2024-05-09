import { ViajeEntity } from '../../viaje/viaje.entity/viaje.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class ConductorEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;
    
    @Column()
    cedula: number;
    
    @Column()
    seguro: string;
    
    @Column()
    placas: string;

    @Column()
    edad: number;

    @OneToMany(() => ViajeEntity, viaje => viaje.conductor)
    viajes: ViajeEntity[];

    


}
