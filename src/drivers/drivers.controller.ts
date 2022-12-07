import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Post()
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driversService.create(createDriverDto);
  }

  @Get()
  findAll() {
    return this.driversService.findAll();
  }

  @Get('name/:name')
  findByName(@Param('name') name: string) {
    return this.driversService.findDriverByName(name);
  }

  @Get('license/:licensePlate')
  findByLicensePlate(@Param('licensePlate') licensePlate: string) {
    return this.driversService.findDriverByLicensePlate(licensePlate);
  }

  @Get('cnh/:cnh')
  findByCnh(@Param('cnh') cnh: string) {
    return this.driversService.findDriverByCNH(cnh);
  }

  @Patch(':cnh')
  update(@Param('cnh') cnh: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driversService.updateDriver(cnh, updateDriverDto);
  }

  @Delete(':cnh')
  remove(@Param('cnh') cnh: string) {
    return this.driversService.removeDriver(cnh);
  }
}
