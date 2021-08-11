import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController],
})
export class AppModule {}
