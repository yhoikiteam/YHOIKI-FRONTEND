"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import HeadingAuth from "@/components/HeadingAuth";
import AuthLayout from "@/layouts/AuthLayout";

export default function Page() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(180); // 3 menit (180 detik)
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  // Countdown Timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // Hanya angka yang diizinkan

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Pindah ke input berikutnya jika ada angka yang diketik
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    // Ambil data yang dipaste, lalu filter hanya angka
    const pasteData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    // Jika tidak ada angka yang valid, hentikan proses
    if (pasteData.length === 0) return;

    // Update state OTP dengan angka yang dipaste
    const newOtp = [...otp];
    pasteData.forEach((char, i) => (newOtp[i] = char));
    setOtp(newOtp);

    // Fokus ke input terakhir yang berisi angka
    const lastIndex = pasteData.length - 1;
    if (lastIndex < 5) inputsRef.current[lastIndex + 1]?.focus();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(otp);
  };

  const handleResendOtp = () => {
    setTimeLeft(180); // Reset timer ke 3 menit
    setOtp(["", "", "", "", "", ""]); // Reset OTP input
    console.log("Resend OTP triggered"); // Simulasi pengiriman ulang OTP
  };

  return (
    <AuthLayout>
      <HeadingAuth
        label="OTP Verification"
        description="We have sent a verification code to your email. Please check your inbox or spam folder."
      />

      {/* Timer Countdown */}
      {timeLeft > 0 ? (
        <p className="text-sm text-davy-gray">
          Resend OTP in:{" "}
          <span className="font-semibold text-primary-one">
            {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
            {String(timeLeft % 60).padStart(2, "0")}
          </span>
        </p>
      ) : null}

      {timeLeft === 0 ? (
        <p className="text-center text-sm italic text-davy-gray">
          Your code has expired, please resend the verification code.
        </p>
      ) : null}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          {otp.map((value, index) => (
            <input
              key={index}
              ref={(el: any) => (inputsRef.current[index] = el)}
              type="text"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              maxLength={1}
              className="h-12 w-12 rounded-md border border-gray-300 text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-one"
            />
          ))}
        </div>
        <Button type="submit" className="h-11 w-full py-2">
          Verify OTP
        </Button>
        <Button
          onClick={handleResendOtp}
          disabled={timeLeft > 0}
          type="button"
          className="h-11 w-full bg-red-500 py-2"
        >
          Resend OTP
        </Button>
      </form>
    </AuthLayout>
  );
}
