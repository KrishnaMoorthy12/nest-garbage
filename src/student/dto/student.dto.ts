import { uuid } from 'uuidv4';

export class Student {
  public id: string;
  constructor(public name: string, public teacher: string) {
    this.id = uuid();
  }
}
export class StudentResponseDto extends Student {}

export class FindStudentResponseDto extends Student {}

export class CreateStudentDto extends Student {}

export class UpdateStudentDto {
  name?: string;
  teacher?: string;
}
