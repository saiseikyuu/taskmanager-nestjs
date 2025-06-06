import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTaskDto) {
    return this.prisma.task.create({ data });
  }

  findAll() {
    return this.prisma.task.findMany();
  }

  findOne(id: string) {
    return this.prisma.task.findUnique({ where: { id: Number(id) } });
  }

  update(id: string, data: UpdateTaskDto) {
    return this.prisma.task.update({ where: { id: Number(id) }, data });
  }

  remove(id: string) {
    return this.prisma.task.delete({ where: { id: Number(id) } });
  }
}
