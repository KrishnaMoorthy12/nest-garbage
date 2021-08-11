import { Body, Param, Put } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('student')
export class StudentController {
  @Get()
  getStudent() {
    return 'Students';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `Student with id ${studentId}`;
  }

  @Post()
  postStudent(@Body() body: { name: string }) {
    return 'Post student ' + JSON.stringify(body);
  }

  @Put('/:studentId')
  updateStudent(@Param('studentId') studentId: string, @Body() body) {
    return `Update student with id ${studentId} & body: ${body}`;
  }
}
