import { accessToken } from "@/states/stateManager";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

export const authService = {
  async login(email: string, password: string) {
    await axios.post(`${API_URL}/login?useCookies=false`, { email, password }, {headers: {'Access-Control-Allow-Origin': '*'}})
    .then(response => {
      accessToken.value = response.data.accessToken;
      return response.data;
    })
    .catch(error => {
      console.error('Error during login request:', error);
      throw error;
    });
  },

  async register(email: string, password: string) {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    return response.json()
  },
}

