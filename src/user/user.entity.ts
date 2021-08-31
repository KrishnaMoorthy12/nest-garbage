import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
