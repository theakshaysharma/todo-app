import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './api/todo/todo.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/todo-app'),
    TodoModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
