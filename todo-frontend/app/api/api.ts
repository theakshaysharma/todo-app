import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export interface TodoItem {
  id?: string;
  userid?: number;
  title?: string;
  description?: string;
  status?: boolean;
}

export const fetchTodos = async (): Promise<TodoItem[]> => {
  try {
    const response: AxiosResponse<TodoItem[]> = await axios.get(`${API_BASE_URL}/todo`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch todos:', error);
    throw error;
  }
};

export const addTodo = async (todo: TodoItem): Promise<TodoItem> => {
  try {
    console.log('fxcgfhjgfdcg', todo);
    const response: AxiosResponse<TodoItem> = await axios.post(`${API_BASE_URL}/todo`, todo);
    return response.data;
  } catch (error) {
    console.error('Failed to add todo:', error);
    throw error;
  }
};

export const updateTodo = async (updatedTodo: TodoItem): Promise<TodoItem> => {
  try {
    console.log('bad reques', updatedTodo);
    const response = await axios.put(`${API_BASE_URL}/todo`, updatedTodo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to update todo:', error);
    throw error;
  }
};

export const deleteTodo = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/todo/${id}`);
  } catch (error) {
    console.error('Failed to delete todo:', error);
    throw error;
  }
};
