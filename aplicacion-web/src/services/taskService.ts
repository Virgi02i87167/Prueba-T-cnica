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