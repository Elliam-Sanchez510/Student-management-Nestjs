import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto, } from '../dto/student.dto';
import { Asignatura } from 'src/asignatura/entities/asignatura.entity';
import { Student } from '../entities/student.entity';



@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
  ) {}

  async create(CreateStudentDto: CreateStudentDto) {
    const student = await this.studentRepo.create(CreateStudentDto)
    await this.studentRepo.save(student)
    return student;
  }

  findOne(id: number) {
    return this.studentRepo.findOne({where:{id},  relations: ['user', 'tareas'] });
  }

  findAll() {
    return this.studentRepo.find({
      relations:{user:true, tareas:true, asignatura:true}
    });
  }

  async remove(id: number) {
    const student = await this.findOne(id);
    await this.studentRepo.remove(student);
    return 'Estudiante  eliminado';
  }

  async update(id: number, cambios: CreateStudentDto) {
    return "aqui elimino"
  }
}