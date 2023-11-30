import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignatura } from 'src/asignatura/entities/asignatura.entity';
import { Student } from './entities/student.entity';
import { StudentController } from './controller/student.controller';
import { StudentService } from './services/student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Asignatura,])],
  controllers: [StudentController, ],
  providers: [StudentService, ],
})
export class EstudianteModule {}