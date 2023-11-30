import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { StudentController } from './controller/student.controller';
import { StudentService } from './services/student.service';
import { Asignatura } from '../course/entities/asignatura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Asignatura,])],
  controllers: [StudentController, ],
  providers: [StudentService, ],
})
export class StudentModule {}