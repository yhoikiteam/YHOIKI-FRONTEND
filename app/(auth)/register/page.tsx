"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/authService";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password_confirmation, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const tanganiRegister = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validasi input sebelum melanjutkan
    if (!name || !email || !password || !password_confirmation) {
      setError("Semua kolom harus diisi!");
      setLoading(false);
      return;
    }

    if (password !== password_confirmation) {
      setError("Password dan Konfirmasi Password tidak cocok!");
      setLoading(false);
      return;
    }

    try {
      // Panggil API untuk registrasi
      const response = await registerUser({
        name,
        email,
        password,
        password_confirmation,
      });
      console.log("Registrasi Sukses Bosku:", response);

      // Redirect ke halaman login setelah registrasi berhasil
      router.push("/login");
    } catch (err: any) {
      if (err.message) {
        setError(err.message);
      } else {
        setError("Terjadi masalah dengan koneksi, coba lagi nanti.");
      }
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
        onSubmit={tanganiRegister}
        className="relative flex h-96 w-3/5 rounded-3xl border border-gray-300 bg-white shadow-xl"
      >
        <div className="text-4xl">
          <button
            type="button"
            className="absolute right-4 top-4 text-gray-600"
            onClick={() => router.push("/")}
          >
            &times;
          </button>
        </div>

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

        <div className="flex w-1/2 flex-col items-center justify-center space-y-4 p-8 text-gray-600">
          <h1 className="text-2xl font-bold text-gray-600">Register</h1>
          <input
            type="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
            className="w-full rounded-full border border-gray-300 bg-gray-200 px-6 py-2 outline-color1 duration-300 hover:bg-gray-300"
          />
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
          <div className="relative w-full">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmpassword"
              value={password_confirmation}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-gradient-to-r from-color1 to-color2 p-2 text-white duration-300 hover:from-color2 hover:to-color2"
          >
            {loading ? "Registering..." : "Register"}
          </button>
          {error && <p className="mb-2 text-sm text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Register;
