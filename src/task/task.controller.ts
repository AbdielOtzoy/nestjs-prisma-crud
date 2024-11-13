import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, NotFoundException } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {

    const taskFound = await this.taskService.findOne(Number(id));
    if (!taskFound) {
      throw new NotFoundException('Task not found');
    }
    return taskFound;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    try {
      return await this.taskService.update(+id, updateTaskDto);
    } catch (error) {
      throw new BadRequestException('Task not found');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.taskService.remove(+id);
    } catch (error) {
      throw new BadRequestException('Task not found');
    }
  }
}
