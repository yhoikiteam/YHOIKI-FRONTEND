"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/Button";
import FormFieldError from "@/components/FormFieldError";
import HeadingAuth from "@/components/HeadingAuth";
import InputTypePassword from "@/components/InputTypePassword";
import AuthLayout from "@/layouts/AuthLayout";
import { resetPasswordSchema } from "@/validations/authValidation";

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleConfirm, setPasswordVisibleConfirm] = useState(false);

  const onSubmit = async (data: ResetPasswordFormData) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <HeadingAuth
        label="Reset password"
        description="Create a new password bellow to change your password"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        {/* Password */}
        <div>
          <InputTypePassword
            state={passwordVisible}
            setState={setPasswordVisible}
            {...register("password")}
            placeholder="Password"
            error={errors.password}
          />

          <FormFieldError errors={errors.password} />
        </div>

        {/* Confirm Password */}
        <div>
          <InputTypePassword
            state={passwordVisibleConfirm}
            setState={setPasswordVisibleConfirm}
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            error={errors.confirmPassword}
          />
          <FormFieldError errors={errors.confirmPassword} />
        </div>

        <Button className="h-11 w-full py-2">
          {isSubmitting ? "Loading" : "Reset Password"}
        </Button>
      </form>
    </AuthLayout>
  );
}
