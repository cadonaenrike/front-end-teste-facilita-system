import React, { useState } from "react";
import { TaskService } from "@/pages/api/task";

interface CreateTaskModalProps {
  onClose: () => void;
  onTaskCreated: () => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  onClose,
  onTaskCreated,
}) => {
  const [tarefa, setTarefa] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleCreate = async () => {
    if (!tarefa) {
      alert("Por favor, preencha o campo de tarefa.");
      return;
    }

    setIsCreating(true);
    try {
      await TaskService.createTask({ tarefa });
      onTaskCreated();
      onClose();
    } catch (error) {
      console.error("Erro ao criar tarefa", error);
      alert("Ocorreu um erro ao tentar criar a tarefa.");
    } finally {
      setIsCreating(false);
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
            <h3 className="text-xl leading-6 font-medium text-gray-900">
              Criar Nova Tarefa
            </h3>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Descreva a tarefa"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-base"
                disabled={isCreating}
              />
            </div>

            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              {isCreating ? (
                <div className="flex justify-center items-center w-full p-2 sm:w-auto sm:ml-3">
                  Criando tarefa.....
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleCreate}
                  >
                    Criar
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-base"
                    onClick={onClose}
                    disabled={isCreating}
                  >
                    Cancelar
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
