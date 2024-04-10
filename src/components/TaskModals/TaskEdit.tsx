import React, { useState } from "react";
import { Tarefa } from "@/interfaces/Tarefas.interface";
import { TaskService } from "@/pages/api/task";

interface EditTaskModalProps {
  task: Tarefa;
  onClose: () => void;
  onTaskUpdated: () => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  task,
  onClose,
  onTaskUpdated,
}) => {
  const [tarefaDescricao, setTarefaDescricao] = useState(task.tarefa);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = async () => {
    if (!tarefaDescricao) {
      alert("Por favor, preencha o campo de descrição da tarefa.");
      return;
    }

    setIsUpdating(true);
    try {
      await TaskService.updateTask(task.codigo, {
        ...task,
        tarefa: tarefaDescricao,
      });
      onTaskUpdated();
    } catch (error) {
      console.error("Erro ao atualizar tarefa", error);
      alert("Ocorreu um erro ao tentar editar a tarefa.");
    } finally {
      setIsUpdating(false);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4 text-center">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 className="text-2xl font-medium leading-6 text-gray-900">
              Editar Tarefa
            </h3>
            <div className="mt-4">
              <input
                type="text"
                id="tarefa"
                value={tarefaDescricao}
                onChange={(e) => setTarefaDescricao(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-base"
                disabled={isUpdating}
              />
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            {isUpdating ? (
              <div className="flex justify-center items-center w-full sm:w-auto sm:ml-3">
                Atualizando sua tarefa...
              </div>
            ) : (
              <>
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleUpdate}
                >
                  Salvar
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onClose}
                  disabled={isUpdating}
                >
                  Cancelar
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
