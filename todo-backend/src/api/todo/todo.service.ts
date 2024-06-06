import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Todo, TodoDocument } from 'src/models/todo.schema';
import { CreateTodoDto, FindTodoDto, UpdateTodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createTodo = new this.todoModel(createTodoDto);
    const userId: number = createTodoDto?.userId || 1234;
    const title: string = createTodoDto?.title;
    const description: string = createTodoDto?.description;
    const todo = await this.todoModel
      .findOne({ userId, title, description })
      .exec();
    if (todo) {
      throw new UnprocessableEntityException('Same task already exists');
    }
    createTodo.userId = 1234;
    return createTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    const todos = await this.todoModel.find().sort({ createdAt: -1 }).exec();
    return todos.map((todo) => ({
      id: todo._id.toString(), // Ensure id is a string
      userId: todo.userId,
      title: todo.title,
      description: todo.description,
      status: todo.status,
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt,
    }));
  }

  async update(updateTodoDto: UpdateTodoDto): Promise<Todo> {
    let id = updateTodoDto?.id;
    const update = await this.todoModel
      .findByIdAndUpdate(id, updateTodoDto, { new: true })
      .exec();
    if (!update) {
      throw new UnprocessableEntityException('Task not found to update');
    }
    return update;
  }

  async findOne(findTodoDto: FindTodoDto): Promise<Todo> {
    const _id: string = findTodoDto?.id;
    const userId: number = findTodoDto?.userId || 1234;
    const task = await this.todoModel.findOne({ _id, userId }).exec();
    if (!task) {
      throw new NotFoundException('Task Not found');
    }
    return task;
  }

  async delete(id: string): Promise<Todo> {
    const result = await this.todoModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new UnprocessableEntityException('Task not found to remove');
    }
    return result;
  }
}
