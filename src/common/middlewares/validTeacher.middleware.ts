import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as db from '../../db';

@Injectable()
export class ValidTeacherMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { teacherId } = req.params;
    const teacherExists = db.teachers.some((t) => t.id === teacherId);
    if (!teacherExists) throw new HttpException('Teacher does not exist', 400);
    next();
  }
}
