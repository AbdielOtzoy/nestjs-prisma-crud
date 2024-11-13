import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto): Promise<{
        id: number;
        title: string;
        description: string | null;
    }>;
    findAll(): Promise<{
        id: number;
        title: string;
        description: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        title: string;
        description: string | null;
    }>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<{
        id: number;
        title: string;
        description: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        title: string;
        description: string | null;
    }>;
}
