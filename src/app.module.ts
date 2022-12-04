import { Module } from '@nestjs/common';
import { DriversModule } from './drivers/drivers.module';
import { DatabaseModule } from './database/database.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    DriversModule, 
    DatabaseModule, 
    CarsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
