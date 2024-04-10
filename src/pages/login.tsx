import React, { useState } from "react";
import { useRouter } from "next/router";
import { Login } from "@/interfaces/Login.interface";
import { AuthService } from "@/pages/api/login";

const LoginPage = () => {
  const [credentials, setCredentials] = useState<Login>({
    nome: "",
    senha: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await AuthService.login(credentials);
      router.push("/");
    } catch (error) {
      console.error("Failed to login", error);
      setError("Falha no login. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAccount = () => {
    router.push("/register");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100">
      <div className="w-full max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg">
        <form className="space-y-6" onSubmit={handleLogin}>
          <h1 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
            Gerenciador de Tarefas
          </h1>
          <h2 className="text-center text-lg sm:text-xl font-medium text-gray-900">
            Login
          </h2>
          {error && <p className="text-red-500 text-sm italic">{error}</p>}
          <div>
            <label htmlFor="nome" className="sr-only">
              Nome de usuário
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              placeholder="Nome de usuário"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={credentials.nome}
              onChange={(e) =>
                setCredentials({ ...credentials, nome: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="senha" className="sr-only">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              required
              placeholder="Senha"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={credentials.senha}
              onChange={(e) =>
                setCredentials({ ...credentials, senha: e.target.value })
              }
            />
          </div>
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
                Entrar
              </button>
            )}
          </div>
          <div>
            <button
              type="button"
              onClick={handleCreateAccount}
              className="w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Criar Conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
