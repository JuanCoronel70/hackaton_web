import { ViajeEntity } from '../../viaje/viaje.entity/viaje.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class LugarEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    latitud: number;
    
    @Column()
    longitud: number;
    
    @Column()
    nombreUbicacion: string;

    @OneToMany(() => ViajeEntity, viaje => viaje.lugarSalida)
    viajesSalida: ViajeEntity[];

    @OneToMany(() => ViajeEntity, viaje => viaje.lugarDestino)
    viajesDestino: ViajeEntity[];



}
