import { Student } from 'src/components/student/entities/student.entity';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Asignatura {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 15, nullable: false })
  grado: string;

  @OneToMany(() => Student, student => student.asignatura,{
  })
  student: Student[];
}