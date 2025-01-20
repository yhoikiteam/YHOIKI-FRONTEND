"use client"

import Image from "next/image"
import { useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev)
    }

    return (
        <div className="w-full h-screen bg-white/10 backdrop-blur-sm flex items-center justify-center pb-20">
            <form className="bg-white w-3/5 h-96 rounded-3xl border border-gray-300 flex shadow-xl relative">
                
                {/* Logo X di pojok kanan atas */}
                <div className="text-4xl">
                <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-600"
                    onClick={() => window.location.href = "/"} // Tombol close akan mengarahkan ke halaman utama
                >
                    &times;
                </button>
                </div>

                {/* Bagian Gambar */}
                <div className="w-1/2 h-full overflow-hidden">
                    <Image
                        src="/images/Hero.png"
                        alt="Hero Image"
                        width={600}
                        height={600}
                        className="object-cover w-full h-full rounded-l-3xl"
                    />
                </div>
                
                {/* Form Login */}
                <div className="w-1/2 flex flex-col space-y-4 p-8 justify-center items-center text-gray-600">
                    <h1 className="text-2xl font-bold text-gray-600">Login</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        className="bg-gray-200 rounded-full px-6 py-2 border border-gray-300 hover:bg-gray-300 outline-color1 duration-300 w-full"
                    />
                    <div className="w-full relative">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Password"
                            className="bg-gray-200 rounded-full px-6 py-2 border border-gray-300 hover:bg-gray-300 outline-color1 duration-300 w-full"
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
                    <div className="w-full flex justify-between px-2">
                    <button className="cursor-pointer text-color1 text-sm px-2 hover:text-color2 duration-300">Forgot Password?</button>
                    <button className="cursor-pointer text-color1 text-sm px-2 hover:text-color2 duration-300">Register</button>
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-color1 to-color2 text-white w-full rounded-full p-2 hover:from-color2 hover:to-color2 duration-300"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login
