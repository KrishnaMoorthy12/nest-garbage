import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { StudentResponseDto } from './dto/student.dto';

@Injectable()
export class StudentService {
  private students = students;
  getStudents(): StudentResponseDto[] {
    return this.students;
  }
}
