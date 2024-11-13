import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateTaskDto): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<{
        id: number;
        title: string;
        description: string | null;
    }>;
    remove(id: number): Promise<Task>;
}
