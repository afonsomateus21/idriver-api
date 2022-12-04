import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'cars' })
export class Car {
  @PrimaryColumn({ name: 'license_plate' })
  licensePlate: string;

  @Column({ nullable: false })
  model: string;

  @Column({ nullable: false })
  year: string;

  @Column({ nullable: false, name: 'car_maker' })
  carMaker: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at '})
  updatedAt: string;
}