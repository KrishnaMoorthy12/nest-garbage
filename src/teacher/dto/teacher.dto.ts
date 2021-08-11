import { StudentModel } from '../../student/dto/student.dto';

export class TeacherModel {
  name: string;
  students: StudentModel[] | string[];
}

export class TeacherResponseDto extends TeacherModel {}

export class FindTeacherResponseDto extends TeacherModel {}

export class CreateTeacherDto extends TeacherModel {}
