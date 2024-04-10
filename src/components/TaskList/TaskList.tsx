import React, { useState } from "react";
import TaskComponent from "@/components/Task/Task";
import { Tarefa } from "@/interfaces/Tarefas.interface";
import CreateTaskModal from "@/components/TaskModals/TaskCreate";

interface TaskListProps {
  tasks: Tarefa[];
  onTaskUpdated: () => Promise<void>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskUpdated }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 relative">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Você não possui tarefas.
        </p>
      ) : isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <TaskComponent
              key={task.codigo}
              task={task}
              onTaskUpdated={() => {
                setIsLoading(true);
                onTaskUpdated().finally(() => setIsLoading(false));
              }}
            />
          ))}
        </div>
      )}
      <button
        onClick={() => setShowCreateModal(true)}
        className="fixed bottom-9 right-9 bg-blue-700 hover:bg-blue-500 text-white font-bold py-3 px-5 rounded-full shadow-lg transition ease-in-out duration-150"
      >
        + Adicionar Tarefa
      </button>

      {showCreateModal && (
        <CreateTaskModal
          onClose={() => setShowCreateModal(false)}
          onTaskCreated={() => {
            setIsLoading(true);
            onTaskUpdated().finally(() => setIsLoading(false));
          }}
        />
      )}
    </div>
  );
};

export default TaskList;
