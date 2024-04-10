import React, { useState } from "react";
import { useRouter } from "next/router";
import { AuthService } from "@/pages/api/login";

const RegisterPage = () => {
  const [newAccountData, setNewAccountData] = useState({
    nome: "",
    senha: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await AuthService.register(newAccountData);
      setLoading(false);
      router.push("/login");
    } catch (error) {
      console.error("Failed to create account", error);
      setError("Erro ao criar conta. Por favor, tente novamente.");
      setLoading(false);
    }
  };

  const handleGoToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100">
      <div className="w-full max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg">
        <form onSubmit={handleCreateAccount} className="space-y-6">
          <h1 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
            Criar Nova Conta
          </h1>
          <div>
            <label htmlFor="nome" className="block font-medium">
              Nome de Usuário
            </label>
            <input
              type="text"
              id="nome"
              value={newAccountData.nome}
              onChange={(e) =>
                setNewAccountData({
                  ...newAccountData,
                  nome: e.target.value,
                })
              }
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="senha" className="block font-medium">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              value={newAccountData.senha}
              onChange={(e) =>
                setNewAccountData({
                  ...newAccountData,
                  senha: e.target.value,
                })
              }
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div>
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
              </div>
            ) : (
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Criar Conta
              </button>
            )}
          </div>
        </form>
        <div className="mt-4">
          <button
            onClick={handleGoToLogin}
            className="text-indigo-600 hover:text-indigo-700 text-sm font-medium focus:outline-none"
          >
            Voltar para Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
