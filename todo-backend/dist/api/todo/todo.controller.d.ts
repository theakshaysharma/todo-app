import { TodoService } from './todo.service';
import { Todo } from 'src/models/todo.schema';
import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    findAll(): Promise<Todo[]>;
    findOne(id: string, userId: number): Promise<Todo>;
    create(createTaskDto: CreateTodoDto): Promise<Todo>;
    update(updateTaskDto: UpdateTodoDto): Promise<Todo>;
    delete(id: string): Promise<Todo>;
}
