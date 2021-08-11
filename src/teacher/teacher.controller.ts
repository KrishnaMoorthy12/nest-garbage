import { Controller, Get, Param } from '@nestjs/common';

@Controller('teacher')
export class TeacherController {
  @Get()
  getTeacher() {
    return 'All teachers';
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId: string) {
    return `Teacher by ID ${teacherId}`;
  }
}
