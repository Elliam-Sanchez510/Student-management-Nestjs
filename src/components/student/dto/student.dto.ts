import {IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsNotEmpty()
  @IsString()
  fecha_nacimiento: string;

  @IsNotEmpty()
  @IsString()
  grado: string;

  @IsNotEmpty()
  @IsString()
  direccion: string;

  @IsOptional()
  @IsNumber()
  user_id: number;

  @IsOptional()
  @IsNumber()
  tareasId:number
}