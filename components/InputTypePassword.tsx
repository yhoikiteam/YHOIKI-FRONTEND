"use client";

import { Dispatch, SetStateAction } from "react";
import { FieldError } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Input from "@/components/Input";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  error?: FieldError | undefined;
}

export default function InputTypePassword({
  state,
  setState,
  error,
  ...props
}: IProps) {
  return (
    <div className="relative w-full">
      <Input
        type={state ? "text" : "password"}
        className="h-11"
        {...props}
        error={error}
      />
      <button
        type="button"
        className="absolute right-6 top-1/2 -translate-y-1/2 transform"
        onClick={() => setState((prev) => !prev)}
      >
        {state ? (
          <FiEyeOff className="text-gray-400" size={20} />
        ) : (
          <FiEye className="text-gray-400" size={20} />
        )}
      </button>
    </div>
  );
}
