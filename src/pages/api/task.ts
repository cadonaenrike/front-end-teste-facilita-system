import { Tarefa } from "@/interfaces/Tarefas.interface";
import api from "./api";

export const TaskService = {
  getAllTasks: async (): Promise<Tarefa[]> => {
    try {
      const { data } = await api.get("/tarefas/");
      return data.data;
    } catch (error) {
      console.error("Failed to fetch tasks", error);
      throw error;
    }
  },

  getTaskById: async (id: number): Promise<Tarefa> => {
    try {
      const response = await api.get<Tarefa>(`/tarefas/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch task by id ${id}`, error);
      throw error;
    }
  },

  createTask: async (taskData: Partial<Tarefa>): Promise<Tarefa> => {
    try {
      const response = await api.post<Tarefa>("/tarefas", taskData);
      return response.data;
    } catch (error) {
      console.error("Failed to create task", error);
      throw error;
    }
  },

  updateTask: async (
    id: number,
    taskData: Partial<Tarefa>
  ): Promise<Tarefa> => {
    try {
      const response = await api.put<Tarefa>(`/tarefas/${id}`, taskData);
      return response.data;
    } catch (error) {
      console.error(`Failed to update task with id ${id}`, error);
      throw error;
    }
  },

  deleteTask: async (id: number): Promise<void> => {
    try {
      await api.delete<void>(`/tarefas/${id}`);
    } catch (error) {
      console.error(`Failed to delete task with id ${id}`, error);
      throw error;
    }
  },
};
