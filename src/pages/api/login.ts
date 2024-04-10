import { Login } from "@/interfaces/Login.interface";
import axios from "axios";

const baseURL = "http://localhost:3000/";

export const AuthService = {
  login: async (credentials: Login): Promise<void> => {
    try {
      const response = await axios.post(`${baseURL}api/login`, credentials);
      const { token } = response.data.data;
      sessionStorage.setItem("token", token);
    } catch (error) {
      console.error("Failed to login", error);
      throw error;
    }
  },

  logout: async (): Promise<void> => {
    const token = sessionStorage.getItem("token");
    try {
      await axios.post(
        `${baseURL}api/logout`,
        {},
        {
          headers: {
            token: token,
          },
        }
      );
      sessionStorage.removeItem("token");
    } catch (error) {
      console.error("Failed to logout", error);
      throw error;
    }
  },

  register: async (userData: {
    nome: string;
    senha: string;
  }): Promise<void> => {
    try {
      await axios.post(`${baseURL}api/register`, userData);
    } catch (error) {
      console.error("Failed to register user", error);
      throw error;
    }
  },
};
