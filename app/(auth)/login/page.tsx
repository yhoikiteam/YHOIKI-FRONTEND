"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/authService";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const tanganiLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email && !password) {
      setError("Email Dan Password Harus Di Isi!");
      return;
    } else if (!email) {
      setError("Email Harus Di isi!");
      return;
    } else if (!password) {
      setError("Password Harus Di isi!");
      return;
    }

    try {
      const data = await loginUser({ email, password });
      return router.push("/home");
      setError(data);
    } catch (error: any) {
      setError("Kesalahan Tidak Terduga" + error);
    } finally {
      setLoading(false);
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white backdrop-blur-sm">
      <form
        onSubmit={tanganiLogin}
        className="relative flex h-96 w-3/5 rounded-3xl border border-gray-300 bg-white shadow-xl"
      >
        {/* Logo X di pojok kanan atas */}
        <div className="text-4xl">
          <button
            type="button"
            className="absolute right-4 top-4 text-gray-600"
            onClick={() => router.push("/")} // Tombol close akan mengarahkan ke halaman utama
          >
            &times;
          </button>
        </div>

        {/* Bagian Gambar */}
        <div className="h-full w-1/2 overflow-hidden">
          <Link
            href="/"
            id="logo"
            className="absolute left-4 top-4 z-20 flex items-center space-x-3"
          >
            <img
              className="w-7"
              src="https://i.ibb.co.com/0DhSzYN/Yhoiki.png"
              alt="logo"
            />
            <h1 className="text-xl font-bold text-gray-700">Yhoiki</h1>
          </Link>
          <Image
            src="/images/Hero.png"
            alt="Hero Image"
            width={1000}
            height={1000}
            className="z-10 h-full w-full rounded-l-3xl object-cover"
          />
        </div>

        {/* Form Login */}
        <div className="flex w-1/2 flex-col items-center justify-center space-y-4 p-8 text-gray-600">
          <h1 className="text-2xl font-bold text-gray-600">Login</h1>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-full border border-gray-300 bg-gray-200 px-6 py-2 outline-color1 duration-300 hover:bg-gray-300"
          />
          <div className="relative w-full">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-full border border-gray-300 bg-gray-200 px-6 py-2 outline-color1 duration-300 hover:bg-gray-300"
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
          <div className="flex w-full justify-between px-2">
            <button className="cursor-pointer px-2 text-sm text-color1 duration-300 hover:text-color2">
              Forgot Password?
            </button>
            <button className="cursor-pointer px-2 text-sm text-color1 duration-300 hover:text-color2">
              Register
            </button>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-gradient-to-r from-color1 to-color2 p-2 text-white duration-300 hover:from-color2 hover:to-color2"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <p className="mb-2 text-sm text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Login;
