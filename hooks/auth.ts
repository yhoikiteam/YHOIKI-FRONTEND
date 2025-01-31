import apiClient from "../lib/axios";
import { useRouter } from "next/navigation";
import { destroyCookie, setCookie } from "nookies";

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}) => {
  try {
    const response = await apiClient.post('/register', data);
    console.log('Response Data:', JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error('Error Response:', JSON.stringify(error.response.data, null, 2));
      throw new Error(error.response.data.message || 'Registration failed');
    } else {
      console.error('Error Message:', error.message);
      throw new Error('An error occurred during registration');
    }
  }
};

export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await apiClient.post('/login', data);
    const token = response.data.token;
    setCookie(null, 'token', token, {
      path: '/',
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7,
    });
    return response.data;
  } catch (error: any) {
    console.log("Eror Broku: ", error)
  }
};

export const logoutUser = () => {
  destroyCookie(null, 'token', { path: '/'});
  window.location.href = '/'
}