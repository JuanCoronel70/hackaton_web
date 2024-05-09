import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViajeModule } from './viaje/viaje.module';
import { PasajeroModule } from './pasajero/pasajero.module';
import { ConductorModule } from './conductor/conductor.module';
import { LugarModule } from './lugar/lugar.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViajeEntity } from './viaje/viaje.entity/viaje.entity';
import { PasajeroEntity } from './pasajero/pasajero.entity/pasajero.entity';
import { ConductorEntity } from './conductor/conductor.entity/conductor.entity';
import { LugarEntity } from './lugar/lugar.entity/lugar.entity';

@Module({
  imports: [ViajeModule, PasajeroModule, ConductorModule, LugarModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'uber',
      entities: [ViajeEntity, PasajeroEntity, ConductorEntity, LugarEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
