import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('teacher')
export class TeacherController {
  @Get()
  getTeacher() {
    return 'All teachers';
  }

  @Get('/:teacherId')
  getStudentById() {
    return 'Teacher by ID';
  }

  @Post()
  createTeacher() {
    return 'Teacher creation';
  }

  @Put('/:teacherId')
  updateTeacher() {
    return 'Update teacher';
  }
}
