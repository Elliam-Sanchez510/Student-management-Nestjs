import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
  } from '@nestjs/common';
import { StudentService } from '../services/student.service';
import { CreateStudentDto } from '../dto/student.dto';
  
  
  @Controller('student')
  export class StudentController {
    constructor(private readonly studentService: StudentService) {}
    @Post()
    async create(@Body() createStudentDto: CreateStudentDto) {
      return this.studentService.create(createStudentDto);
    }
  
    @Get()
    findAll() {
      return this.studentService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.studentService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.studentService.remove(id);
    }
  
    @Patch(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() createStudentDto: CreateStudentDto,
    ) {
      return this.studentService.update(id, createStudentDto);
    }
  }
  