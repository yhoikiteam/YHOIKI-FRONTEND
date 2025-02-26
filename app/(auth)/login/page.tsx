"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/Button";
import FormFieldError from "@/components/FormFieldError";
import Input from "@/components/Input";
import AuthLayout from "@/layouts/AuthLayout";
import { loginSchema } from "@/validations/authValidation";
import HeadingAuth from "../../../components/HeadingAuth";
import InputTypePassword from "../../../components/InputTypePassword";

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <HeadingAuth label="Login" description="Welcome to platform Yhoiki" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="my-4 w-full space-y-4">
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
          <div>
            <InputTypePassword
              state={passwordVisible}
              setState={setPasswordVisible}
              {...register("password")}
              placeholder="Password"
              error={errors.password}
            />

            <div className="flex justify-between">
              <FormFieldError errors={errors.password} />
              <Link
                href="/reset-password"
                className="ml-auto mt-2 block cursor-pointer whitespace-nowrap text-end text-sm text-primary-one hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
        <Button className="h-11 w-full py-2 text-base">
          {isSubmitting ? "Loading..." : "Login"}
        </Button>
      </form>
      <div className="flex gap-1 text-sm">
        <p className="text-davy-gray">Dont&apos;t have an account?</p>
        <Link href="/register" className="text-primary-one hover:underline">
          Register
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
