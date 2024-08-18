import axiosInstance from "@/lib/axiosInstace";
import { Task } from '../types';

export const getTasks = async () => {
    const response = await axiosInstance.get('/tasks');
    return response.data;
}

export const createTask = async (task: Omit<Task, 'id'>) => {
    const response = await axiosInstance.post('/tasks', task);
    return response.data;
}

export const updateTask = async (id: number, task: Partial<Omit<Task, 'id'>>) => {
    const response = await axiosInstance.post(`/tasks/${id}`, task);
    return response.data;
}

export const deleteTask = async (id: number) => {
    await axiosInstance.delete(`/tasks/${id}`);
}