import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

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

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
}
