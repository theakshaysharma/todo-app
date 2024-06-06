"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const todo_schema_1 = require("../../models/todo.schema");
let TodoService = class TodoService {
    constructor(todoModel) {
        this.todoModel = todoModel;
    }
    async create(createTodoDto) {
        const createTodo = new this.todoModel(createTodoDto);
        const userId = createTodoDto?.userId || 1234;
        const title = createTodoDto?.title;
        const description = createTodoDto?.description;
        const todo = await this.todoModel
            .findOne({ userId, title, description })
            .exec();
        if (todo) {
            throw new common_1.UnprocessableEntityException('Same task already exists');
        }
        createTodo.userId = 1234;
        return createTodo.save();
    }
    async findAll() {
        const todos = await this.todoModel.find().sort({ createdAt: -1 }).exec();
        return todos.map((todo) => ({
            id: todo._id.toString(),
            userId: todo.userId,
            title: todo.title,
            description: todo.description,
            status: todo.status,
            createdAt: todo.createdAt,
            updatedAt: todo.updatedAt,
        }));
    }
    async update(updateTodoDto) {
        let id = updateTodoDto?.id;
        const update = await this.todoModel
            .findByIdAndUpdate(id, updateTodoDto, { new: true })
            .exec();
        if (!update) {
            throw new common_1.UnprocessableEntityException('Task not found to update');
        }
        return update;
    }
    async findOne(findTodoDto) {
        const _id = findTodoDto?.id;
        const userId = findTodoDto?.userId || 1234;
        const task = await this.todoModel.findOne({ _id, userId }).exec();
        if (!task) {
            throw new common_1.NotFoundException('Task Not found');
        }
        return task;
    }
    async delete(id) {
        const result = await this.todoModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.UnprocessableEntityException('Task not found to remove');
        }
        return result;
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(todo_schema_1.Todo.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TodoService);
//# sourceMappingURL=todo.service.js.map