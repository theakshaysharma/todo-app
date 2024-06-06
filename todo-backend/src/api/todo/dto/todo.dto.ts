import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @IsOptional()
  userId: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description?: string;

  @IsOptional()
  status?: boolean;
}
export class UpdateTodoDto {
  @IsNotEmpty()
  id?: string;

  @IsOptional()
  userId: number;

  @IsNotEmpty()
  title?: string;

  @IsNotEmpty()
  description?: string;

  @IsOptional()
  status?: boolean;
}

export class DeleteTodoDto {
  @IsNotEmpty()
  id: string;
}

export class FindTodoDto {
  @IsNotEmpty()
  id?: string;

  @IsOptional()
  userId?: number;
}
