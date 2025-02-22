import { FieldError } from "react-hook-form";
import { cn } from "@/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError | undefined;
  className?: string;
}

export default function Input({
  label,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-davy-gray">
          {label}
        </label>
      )}
      <input
        className={cn(
          "w-full rounded-full bg-gray-200 px-6 py-2 text-sm text-davy-gray placeholder:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-one disabled:cursor-not-allowed disabled:opacity-50",
          className,
          { "border-2 border-red-500 focus-visible:ring-0": error },
        )}
        {...props}
      />
    </div>
  );
}
