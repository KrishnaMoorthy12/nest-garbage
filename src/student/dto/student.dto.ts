export class StudentModel {
  id: string;
  name: string;
  teacher: string;
}
export class StudentResponseDto extends StudentModel {}

export class FindStudentResponseDto extends StudentModel {}

export class CreateStudentDto extends StudentModel {}

export class UpdateStudentDto extends StudentModel {}
