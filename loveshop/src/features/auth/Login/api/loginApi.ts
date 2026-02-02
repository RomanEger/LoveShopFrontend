import { api } from '@/shared/api/axiosInstance';
import { setToken } from '@/shared/auth/authState';

export async function login(email: string, password: string) {
    const response = await api.post('/login', { email, password });
    setToken(response.data.accessToken);
    return response.data;
};
