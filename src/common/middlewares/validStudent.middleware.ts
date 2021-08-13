import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as db from '../../db';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    const { studentId } = req.params;
    const studentExists = db.students.some((s) => s.id === studentId);
    if (!studentExists) throw new HttpException('Student does not exist', 400);
    next();
  }
}
