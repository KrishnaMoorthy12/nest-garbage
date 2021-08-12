import { uuid } from 'uuidv4';

export class Teacher {
  id: string;

  constructor(public name: string) {
    this.id = uuid();
  }
}

export class TeacherResponseDto extends Teacher {}

export class FindTeacherResponseDto extends Teacher {}

export class CreateTeacherDto {
  name: string;
}
