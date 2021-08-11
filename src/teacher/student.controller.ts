import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('teacher/:teacherId/students')
export class StudentTeacherController {
  @Post()
  createTeacher(@Body() body) {
    return `Teacher creation ${JSON.parse(body)}`;
  }

  @Get()
  getTeachersStudents(@Param('teacherId') teacherId: string) {
    return `Teacher ${teacherId}'s students`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body,
  ) {
    return JSON.stringify({ teacherId, studentId, body });
  }
}
