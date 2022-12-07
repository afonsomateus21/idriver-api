import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './entities/driver.entity';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver)
    private driversRepository: Repository<Driver>
  ) {}

  async create(createDriverDto: CreateDriverDto) {
    return await this.driversRepository.save(this.driversRepository.create(createDriverDto));
  }

  async findAll() {
    return await this.driversRepository.find();
  }

  async findDriverByName(name: string) {
    try {
      const drivers = await this.driversRepository.createQueryBuilder('driver')
        .where('driver.name like :name', { name: `%${name}%`})
        .getMany()

      return drivers;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findDriverByLicensePlate(licensePlate: string) {
    try {
      return await this.driversRepository.findOne({ where: { licensePlate: licensePlate } });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findDriverByCNH(cnh: string) {
    try {
      return await this.driversRepository.findOne({ where: { cnh: cnh } });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async updateDriver(cnh: string, updateDriverDto: UpdateDriverDto) {
    try {
      const driver = await this.driversRepository.findOne({ where: { cnh: cnh } });

      this.driversRepository.merge(driver, updateDriverDto);
      return await this.driversRepository.save(driver);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async removeDriver(cnh: string) {
    // try {
      
    // } catch (error) {
    //   throw new NotFoundException(error.message);
    // }
    await this.findDriverByCNH(cnh);
    await this.driversRepository.softDelete(cnh);
  }
}
