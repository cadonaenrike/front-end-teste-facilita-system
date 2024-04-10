import React, { useEffect, useState } from "react";
import TaskList from "@/components/TaskList/TaskList";
import { TaskService } from "@/pages/api/task";
import { Tarefa } from "@/interfaces/Tarefas.interface";
import Image from "next/image";
import { AuthService } from "@/pages/api/login";
import { useRouter } from "next/router";

export default function Home() {
  const [tasks, setTasks] = useState<Tarefa[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const fetchTasks = async () => {
    setIsLoading(true);
    try {
      const tasksData = await TaskService.getAllTasks();
      setTasks(tasksData);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      router.push("/login");
    } else {
      fetchTasks();
    }
  }, []);

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      router.push("/login");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="py-6 bg-white shadow">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <div className="w-32 h-10 relative mr-4">
              <Image
                src="https://facilitasystem.com.br/wp-content/uploads/2023/04/LOGO-FACILITA.jpg"
                alt="Facilita System Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <button
            className="text-sm font-medium border-2 border-gray-600 px-4 py-1 bg-red-500 rounded-full text-black hover:text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={handleLogout}
          >
            Sair
          </button>
        </div>
      </header>
      <main className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Lista de Tarefas</h1>
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <TaskList tasks={tasks} onTaskUpdated={fetchTasks} />
          )}
        </div>
      </main>
    </div>
  );
}
