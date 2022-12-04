import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriversModule } from './drivers/drivers.module';
import { DatabaseModule } from './database/database.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [DriversModule, DatabaseModule, CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
