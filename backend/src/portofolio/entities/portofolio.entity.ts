import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Portofolio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: true })
  isActive: boolean;
}
