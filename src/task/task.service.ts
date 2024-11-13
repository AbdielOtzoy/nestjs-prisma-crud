import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {

  constructor(private prisma: PrismaService) { }

  async create(data: CreateTaskDto): Promise<Task> {
    return this.prisma.task.create({
      data
    });
  }

  async findAll(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async findOne(id: number): Promise<Task> {
    return this.prisma.task.findUnique({
      where: { id }
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto
    });
  }

  async remove(id: number): Promise<Task> {
    return this.prisma.task.delete({
      where: { id }
    });
  }
}
