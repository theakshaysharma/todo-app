import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from 'src/models/todo.schema';
import {
  CreateTodoDto,
  DeleteTodoDto,
  FindTodoDto,
  UpdateTodoDto,
} from './dto/todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Query('userId') userId: number,
  ): Promise<Todo> {
    const find: FindTodoDto = { id, userId };
    return this.todoService.findOne(find);
  }

  @Post()
  async create(@Body() createTaskDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTaskDto);
  }

  @Put()
  async update(@Body() updateTaskDto: UpdateTodoDto): Promise<Todo> {
    return this.todoService.update(updateTaskDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Todo> {
    return this.todoService.delete(id);
  }
}
