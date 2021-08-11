import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { FindStudentResponseDto } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('teacher/:teacherId/students')
export class StudentTeacherController {
  constructor() {}

  @Get()
  getTeachersStudents(
    @Param('teacherId') teacherId: string,
  ): FindStudentResponseDto[] {
    return `Teacher ${teacherId}'s students`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body,
  ): FindTeacherResponseDto {
    return JSON.stringify({ teacherId, studentId, body });
  }
}
