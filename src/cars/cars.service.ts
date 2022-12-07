import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>
  ) {}

  async create(createCarDto: CreateCarDto) {
    return await this.carsRepository.save(this.carsRepository.create(createCarDto));
  }

  async findAll() {
    return await this.carsRepository.find();
  }

  async findCarByLicensePlate(licensePlate: string) {
    try {
      return await this.carsRepository.findOne({ where: { licensePlate: licensePlate } });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async updateCar(licensePlate: string, updateCarDto: UpdateCarDto) {
    try {
      const car = await this.carsRepository.findOne({ where: { licensePlate: licensePlate } });
      this.carsRepository.merge(car, updateCarDto);

      return await this.carsRepository.save(car);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async removeCar(licensePlate: string) {
    try {
      await this.findCarByLicensePlate(licensePlate);
      return await this.carsRepository.softDelete(licensePlate);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
