"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import { registerUser } from "../../hooks/auth";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import VerifyEmail from "../components/layout/Auth/VerifyEmail";

const Register = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [password_confirmation, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [typeError, setTypeError] = useState<string>("");
    const [step, setStep] = useState<number>(2);
    const router = useRouter();

    const tanganiRegister = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (!name || !email || !password || !password_confirmation) {
            setError("Semua kolom harus diisi!");
            setLoading(false);
            return;
        }

        if (name.length > 20) {
            setError("Nama Maksimal 20 Karakter");
            setLoading(false);
            setTypeError("name")
            return;
        }

        if (password.length < 8) {
            setError("Password Minimal 8 Karakter");
            setLoading(false);
            setTypeError("password")
            return;
        }

        if (password !== password_confirmation) {
            setError("Password dan Konfirmasi Password tidak cocok!");
            setLoading(false);
            setTypeError("confirmpassword")
            return;
        }


        try {
            const response = await registerUser({ name, email, password, password_confirmation });
            console.log("Registrasi Sukses Bosku:", response);
            setStep(2);
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
        <div className="w-full h-screen bg-white backdrop-blur-sm flex items-center justify-center">
            { step === 1 &&
            <form onSubmit={tanganiRegister} className="bg-white w-3/5 h-auto rounded-3xl border border-gray-300 flex items-center shadow-xl relative">
                <div className="text-4xl">
                    <button
                        type="button"
                        className="absolute top-4 right-4 text-gray-600"
                        onClick={() => router.push("/")}
                    >
                        &times;
                    </button>
                </div>

                <div className="w-1/2 h-full flex justify-center items-center">
                    <Link href="/" id="logo" className="flex space-x-3 items-center p-5">
                        <img className="w-12" src="https://i.ibb.co.com/0DhSzYN/Yhoiki.png" alt="logo" />
                        <h1 className="text-gray-700 font-bold text-4xl">Yhoiki</h1>
                    </Link>
                </div>

                <div className="w-1/2 flex flex-col space-y-4 p-8 justify-center items-center text-gray-600">
                    <h1 className="text-2xl font-bold text-gray-600">Register</h1>
                    <input
                        type="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className={`${typeError === "name" && 'border-red-500'} bg-gray-200 rounded-full px-6 py-2 border border-gray-300 hover:bg-gray-300 outline-color1 duration-300 w-full`}
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="bg-gray-200 rounded-full px-6 py-2 border border-gray-300 hover:bg-gray-300 outline-color1 duration-300 w-full"
                    />
                    <div className="w-full relative">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`${typeError === "password" && 'border-red-500'} bg-gray-200 rounded-full px-6 py-2 border border-gray-300 hover:bg-gray-300 outline-color1 duration-300 w-full`}
                        />
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 transform -translate-y-1/2"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? (
                                <FiEyeOff className="text-gray-400" size={20} />
                            ) : (
                                <FiEye className="text-gray-400" size={20} />
                            )}
                        </button>
                    </div>
                    <div className="w-full relative">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Confirm Password"
                            name="confirmpassword"
                            value={password_confirmation}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`${typeError === "confirmpassword" && 'border-red-500'} bg-gray-200 rounded-full px-6 py-2 border border-gray-300 hover:bg-gray-300 outline-color1 duration-300 w-full`}
                        />
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 transform -translate-y-1/2"
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
                        className="bg-gradient-to-r from-color1 to-color2 text-white w-full rounded-full p-2 hover:from-color2 hover:to-color2 duration-300"
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                    {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                </div>
            </form>}
            { step === 2 &&
                <VerifyEmail/>
            }
        </div>
    );
};

export default Register;
