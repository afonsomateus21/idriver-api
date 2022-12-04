import { Car } from "src/cars/entities/car.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

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

  @Column()
  licensePlate: string;

  @OneToOne(() => Car, car => car.driver)
  @JoinColumn()
  car: Car;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
}
