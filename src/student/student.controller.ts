import { Put } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('student')
export class StudentController {
  @Get()
  getStudent() {
    return 'Students';
  }

  @Get('/:studentId')
  getStudentById(studentId: number) {
    return `Student with id ${studentId}`;
  }

  @Post()
  postStudent() {
    return 'Post student';
  }

  @Put('/:studentId')
  updateStudent(studentId: number) {
    return `Update student with id ${studentId}`;
  }
}
