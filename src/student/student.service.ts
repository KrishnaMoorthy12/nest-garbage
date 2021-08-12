import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { Student, StudentResponseDto } from './dto/student.dto';

@Injectable()
export class StudentService {
  private students = students;
  getStudents(): StudentResponseDto[] {
    return this.students;
  }

  getStudent(id: string): StudentResponseDto {
    return this.students.find((s) => s.id === id);
  }

  createStudent(student: {
    name: string;
    teacher: string;
  }): StudentResponseDto {
    const newStudent = new Student(student.name, student.teacher);
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(student: {
    id: string;
    name?: string;
    teacher?: string;
  }): StudentResponseDto {
    const index = this.students.findIndex((s) => s.id === student.id);
    const updatedStudent = {
      ...this.students[index],
      ...student,
    };
    this.students[index] = updatedStudent;
    return updatedStudent;
  }

  getStudentsByTeacher(teacher: string): StudentResponseDto[] {
    return this.students.filter((s) => s.teacher === teacher);
  }
}
