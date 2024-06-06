export declare class CreateTodoDto {
    userId: number;
    title: string;
    description?: string;
    status?: boolean;
}
export declare class UpdateTodoDto {
    id?: string;
    userId: number;
    title?: string;
    description?: string;
    status?: boolean;
}
export declare class DeleteTodoDto {
    id: string;
}
export declare class FindTodoDto {
    id?: string;
    userId?: number;
}
