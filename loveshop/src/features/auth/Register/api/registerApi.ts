import { api } from '@/shared/api/axiosInstance';

export async function register(email: string, password: string) {
    const response = await api.post('/register', { email, password });
    return response.data;
};
