import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

//using decorators
@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;

}

export default Appointment;