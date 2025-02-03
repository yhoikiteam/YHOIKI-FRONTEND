import { API_ENDPOINTS } from "@/constants/api";
import apiClient from "@/libs/axios";

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}) => {
  try {
    const response = await apiClient.post(API_ENDPOINTS.REGISTER, data);
    console.log("Response Data:", JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error(
        "Error Response:",
        JSON.stringify(error.response.data, null, 2),
      );
      throw new Error(error.response.data.message || "Registration failed");
    } else {
      console.error("Error Message:", error.message);
      throw new Error("An error occurred during registration");
    }
  }
};

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await apiClient.post(API_ENDPOINTS.LOGIN, data);
    return response.data;
  } catch (error: any) {
    console.log("Eror Broku: ", error);
  }
};
