// import { Asignatura } from 'src/asignatura/entities/asignatura.entity';
// import { Tarea } from 'src/tarea/entities/tarea.entity';
import { Asignatura } from 'src/components/course/entities/asignatura.entity';
import { User } from 'src/components/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column()
  user_id:number;
  @Column()
  asignatura_id:number;

  @Column({ type: 'varchar', length: 15, nullable: false })
  fecha_nacimiento: string;

  @Column({ type: 'varchar', length: 15, nullable: false })
  grado: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  direccion: string;

  // @OneToMany(() => Tarea, (tarea) => tarea.estudiante)
  // tareas: Tarea[];

  @ManyToOne(()=> User, user=> user.student)
  @JoinColumn({name: 'user_id',})
  user:User

  @ManyToOne(()=> Asignatura, asignatura=> asignatura.student)
  @JoinColumn({name: 'asignatura_id',})
  asignatura:Asignatura

} 