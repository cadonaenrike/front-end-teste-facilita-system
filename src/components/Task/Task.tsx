import React, { useState } from "react";
import { Tarefa } from "@/interfaces/Tarefas.interface";
import { TaskService } from "@/pages/api/task";
import EditTaskModal from "../TaskModals/TaskEdit";

interface TaskProps {
  task: Tarefa;
  onTaskUpdated: () => void;
}

const Task: React.FC<TaskProps> = ({ task, onTaskUpdated }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esta tarefa?"
    );
    if (!confirmDelete) return;

    setIsDeleting(true);
    try {
      await TaskService.deleteTask(task.codigo);
      onTaskUpdated();
    } catch (error) {
      console.error("Erro ao deletar tarefa", error);
      alert("Ocorreu um erro ao tentar excluir a tarefa.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {task.tarefa}
        </h3>
        <p className="text-base text-gray-600">Código: {task.codigo}</p>
      </div>
      <div className="px-4 pt-3 pb-4 bg-gray-50 sm:flex sm:flex-row sm:justify-between">
        <div className="flex justify-end space-x-2 mt-3 sm:mt-0">
          <button
            onClick={() => setShowEditModal(true)}
            disabled={isDeleting}
            className="text-blue-600 hover:text-blue-700 bg-transparent border border-blue-600 hover:border-blue-700 py-1 px-3 rounded-md text-base font-medium"
          >
            Editar
          </button>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={`text-red-600 hover:text-red-700 bg-transparent border ${
              isDeleting
                ? "border-gray-300"
                : "border-red-600 hover:border-red-700"
            } py-1 px-3 rounded-md text-base font-medium`}
          >
            {isDeleting ? "Excluindo..." : "Excluir"}
          </button>
        </div>
      </div>
      {showEditModal && (
        <EditTaskModal
          task={task}
          onClose={() => setShowEditModal(false)}
          onTaskUpdated={() => {
            onTaskUpdated();
            setShowEditModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Task;
