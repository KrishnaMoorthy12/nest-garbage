import { Injectable } from '@nestjs/common';
import * as db from '../db';
import {
  FindTeacherResponseDto,
  Teacher,
  TeacherResponseDto,
} from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  private teachers = db.teachers;

  getTeachers(): FindTeacherResponseDto[] {
    return this.teachers;
  }

  getTeacherById(id: string): FindTeacherResponseDto {
    return this.teachers.find((x) => x.id === id);
  }

  createTeacher(name: string): TeacherResponseDto {
    const newTeacher = new Teacher(name);
    this.teachers.push(newTeacher);
    return newTeacher;
  }
}
