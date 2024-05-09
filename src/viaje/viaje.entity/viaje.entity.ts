import { ConductorEntity } from '../../conductor/conductor.entity/conductor.entity';
import { LugarEntity } from '../../lugar/lugar.entity/lugar.entity';
import { PasajeroEntity } from '../../pasajero/pasajero.entity/pasajero.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class ViajeEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    costo: number;

    @Column()
    efectuado: boolean;

    @ManyToOne(() => PasajeroEntity, pasajero => pasajero.viajes)
    pasajero: PasajeroEntity;

    @ManyToOne(() => ConductorEntity, conductor => conductor.viajes)
    conductor: ConductorEntity;

    @ManyToOne(() => LugarEntity, lugar => lugar.viajesSalida)
    lugarSalida: LugarEntity;

    @ManyToOne(() => LugarEntity, lugar => lugar.viajesDestino)
    lugarDestino: LugarEntity;


}
