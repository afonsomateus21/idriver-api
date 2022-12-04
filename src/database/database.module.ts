import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from 'src/cars/entities/car.entity';
import { Driver } from 'src/drivers/entities/driver.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 25432,
      username: 'postgres',
      password: 'passwd',
      database: 'idriver',
      entities: [ Driver, Car ],
      synchronize: true,
      autoLoadEntities: true,
    })
  ]
})
export class DatabaseModule {}
