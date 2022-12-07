import { Car } from "src/cars/entities/car.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity({ name: 'drivers' })
export class Driver {
  @PrimaryColumn()
  cnh: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false, name: 'license_plate' })
  licensePlate: string;

  @Column({ nullable: false })
  model: string;

  @Column({ nullable: false })
  year: string;

  @Column({ nullable: false, name: 'car_maker' })
  carMaker: string;

  @OneToOne(() => Car, car => car.driver)
  @JoinColumn()
  car: Car;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
