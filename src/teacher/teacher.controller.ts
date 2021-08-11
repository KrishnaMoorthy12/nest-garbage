import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FindTeacherResponseDto, TeacherResponseDto } from './dto/teacher.dto';

@Controller('teacher')
export class TeacherController {
  @Get()
  getTeacher(): FindTeacherResponseDto[] {
    return 'All teachers';
  }

  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId') teacherId: string,
  ): FindTeacherResponseDto {
    return `Teacher by ID ${teacherId}`;
  }

  @Post()
  createTeacher(@Body() body: CreateTeacherDto): TeacherResponseDto {
    return `Teacher creation ${JSON.parse(body)}`;
  }
}
