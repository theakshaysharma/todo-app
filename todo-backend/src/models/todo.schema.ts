import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema({ timestamps: true })
export class Todo {
  @Prop({ name: 'userid' })
  userId: number;

  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: false })
  status: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
