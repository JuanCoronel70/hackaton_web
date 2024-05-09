import { ViajeEntity } from '../../viaje/viaje.entity/viaje.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class PasajeroEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;
    
    @Column()
    telefono: number;
    
    @Column()
    metodoPago: string;

    @Column()
    correo: string;

    @OneToMany(() => ViajeEntity, viaje => viaje.pasajero)
    viajes: ViajeEntity[];

}
