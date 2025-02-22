"use client";

import React from "react";
import { Button } from "@/components/Button";
import HeadingAuth from "@/components/HeadingAuth";
import AuthLayout from "@/layouts/AuthLayout";

export default function ForgetPasswordPage() {
  return (
    <AuthLayout>
      <HeadingAuth
        label="Forgot password?"
        description="Please enter your email or telephone number to reset your password"
      />
      <form className="space-y-4">
        <input
          type="text"
          name="username"
          autoComplete="off"
          placeholder="Enter your email or number phone"
          required
          className="h-11 w-full rounded-full bg-gray-200 px-6 py-2 text-davy-gray outline-primary-one duration-300 placeholder:text-sm"
        />
        <Button className="h-11 w-full py-2">Send Reset Intructions</Button>
      </form>
    </AuthLayout>
  );
}
