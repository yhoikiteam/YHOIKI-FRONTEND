"use client";

import React from "react";
import { Button } from "@/components/Button";
import MaintenancePage from "@/components/MaintenancePage";
import { useScreenSize } from "@/hooks/useScreenSize";
import AuthLayout from "@/layouts/AuthLayout";

export default function ForgetPasswordPage() {
  const isMobile = useScreenSize();

  if (isMobile) {
    return <MaintenancePage />;
  }
  return (
    <AuthLayout>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-davy-gray">Forgot password?</h1>
        <p className="text-sm text-davy-gray">
          Please enter your email or telephone number to reset your password
        </p>
      </div>
      <form className="space-y-6">
        <input
          type="text"
          name="username"
          autoComplete="off"
          placeholder="Enter your email or number phone"
          required
          className="w-full rounded-full bg-gainsboro px-6 py-2 text-davy-gray outline-fern-green duration-300 placeholder:text-sm"
        />
        <Button className="w-full py-2">Reset Password</Button>
      </form>
    </AuthLayout>
  );
}
