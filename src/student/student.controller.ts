import { Body, Param, Put } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

@Controller('student')
export class StudentController {
  @Get()
  getStudent(): FindStudentResponseDto[] {
    return 'Students';
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentResponseDto {
    return `Student with id ${studentId}`;
  }

  @Post()
  postStudent(@Body() body: CreateStudentDto) {
    return 'Post student ' + JSON.stringify(body);
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return `Update student with id ${studentId} & body: ${body}`;
  }
}
