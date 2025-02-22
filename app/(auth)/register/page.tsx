"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/Button";
import FormFieldError from "@/components/FormFieldError";
import HeadingAuth from "@/components/HeadingAuth";
import Input from "@/components/Input";
import InputTypePassword from "@/components/InputTypePassword";
import AuthLayout from "@/layouts/AuthLayout";
import { registerSchema } from "@/validations/authValidation";

type RegisterFormData = z.infer<typeof registerSchema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleConfirm, setPasswordVisibleConfirm] = useState(false);

  const onSubmit = async (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <HeadingAuth
        label="Register"
        description="Create an account to use platform Yhoiki"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="my-4 w-full space-y-4">
          {/* Username */}
          <div>
            <Input
              type="text"
              {...register("username")}
              autoComplete="off"
              placeholder="Username"
              className="h-11"
              error={errors.username}
            />
            <FormFieldError errors={errors.username} />
          </div>

          {/* Email */}
          <div>
            <Input
              type="email"
              {...register("email")}
              autoComplete="off"
              placeholder="Email"
              className="h-11"
              error={errors.email}
            />
            <FormFieldError errors={errors.email} />
          </div>

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
        </div>

        {/* Checkbox Terms */}
        <label
          htmlFor="agree"
          className="mb-4 flex cursor-pointer items-center gap-2"
        >
          <input type="checkbox" id="agree" required />
          <span className="text-sm text-davy-gray">
            Saya memahami Kebijakan Privasi dan Ketentuan Yhoiki
          </span>
        </label>

        {/* Submit Button */}
        <Button
          type="submit"
          className="h-11 w-full py-2 text-base"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Register"}
        </Button>
      </form>

      <div className="flex gap-1 text-sm">
        <p className="text-davy-gray">Already have an account?</p>
        <Link href="/login" className="text-primary-one hover:underline">
          Login
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Register;
