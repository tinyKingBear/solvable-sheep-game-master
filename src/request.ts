const baseUrl = 'http://localhost:8080';

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

interface ApiResponse<T> {
    code: number;
    data: T;
    message: string;
}

class ApiError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ApiError';
    }
}

class Api {
    private axiosInstance = axios.create({
        baseURL: baseUrl,
    });

    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            console.log('get', url, config);
            const response: AxiosResponse<ApiResponse<T>> =
                await this.axiosInstance.get(url, config);
            return response.data.data;
        } catch (error) {
            this.handleRequestError(error as AxiosError<ApiResponse<T>>);
            return {} as T;
        }
    }

    async post<T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<T> {
        try {
            const response: AxiosResponse<ApiResponse<T>> =
                await this.axiosInstance.post(url, data, config);
            return response.data.data;
        } catch (error) {
            this.handleRequestError(error as AxiosError<ApiResponse<T>>);
            return {} as T;
        }
    }

    private handleRequestError(error: AxiosError) {
        if (error.response) {
            const { data } = error.response;
            throw new ApiError((data as { message: string }).message);
        } else if (error.request) {
            throw new ApiError('No response from server');
        } else {
            throw new ApiError('Request failed');
        }
    }
}

export default new Api();
