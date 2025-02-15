"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@/components/Button";
import MaintenancePage from "@/components/MaintenancePage";
import { useScreenSize } from "@/hooks/useScreenSize";
import AuthLayout from "@/layouts/AuthLayout";
import { loginUser } from "@/services/authService";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const isMobile = useScreenSize();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  } as FormData);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const tanganiLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { email, password } = formData;

    if (!password || password.trim() === "") {
      setError("Password tidak valid!");
    }

    const response = await loginUser({ email, password });
    console.log(response);

    setLoading(false);
    setError("");
  };

  if (isMobile) {
    return <MaintenancePage />;
  }

  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold text-davy-gray">Login</h1>
      <form onSubmit={tanganiLogin} className="w-full">
        <div className="mb-4 w-full space-y-4">
          <input
            type="email"
            name="email"
            autoComplete="off"
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full rounded-full bg-gainsboro px-6 py-2 text-davy-gray outline-fern-green duration-300 placeholder:text-sm"
          />
          <div>
            <div className="relative w-full">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                name="password"
                required
                onChange={handleChange}
                className="outline-color1 w-full rounded-full bg-gainsboro px-6 py-2 outline-fern-green duration-300 placeholder:text-sm"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 transform"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <FiEyeOff className="text-gray-400" size={20} />
                ) : (
                  <FiEye className="text-gray-400" size={20} />
                )}
              </button>
            </div>
            <div className="mt-2 flex w-full justify-between">
              <Link
                href="/register"
                className="cursor-pointer px-2 text-sm text-fern-green duration-300 hover:text-medium-sea-green hover:underline"
              >
                Register
              </Link>
              <Link
                href="/forget-password"
                className="cursor-pointer px-2 text-sm text-fern-green duration-300 hover:text-medium-sea-green hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
        <Button className="w-full py-2">
          {loading ? "Logging in..." : "Login"}
        </Button>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </form>
    </AuthLayout>
  );
};

export default Login;
