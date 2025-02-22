import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }),
  password: z
    .string()
    .min(6, { message: "Password minimal 6 karakter" })
    .max(32, { message: "Password maksimal 32 karakter" })
    .regex(/[A-Z]/, { message: "Password harus mengandung huruf besar" })
    .regex(/[a-z]/, { message: "Password harus mengandung huruf kecil" })
    .regex(/[0-9]/, { message: "Password harus mengandung angka" })
    .regex(/[@$!%*?&]/, {
      message: "Password harus mengandung simbol (@$!%*?&)",
    }),
});

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username minimal 3 karakter")
      .max(20, "Username maksimal 20 karakter")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username hanya boleh berisi huruf, angka, dan underscore",
      ),

    email: z
      .string()
      .min(1, "Email wajib diisi")
      .email("Format email tidak valid"),

    password: z
      .string()
      .min(6, "Password minimal 6 karakter")
      .max(30, "Password maksimal 30 karakter")
      .regex(/[a-z]/, "Password harus mengandung huruf kecil")
      .regex(/[A-Z]/, "Password harus mengandung huruf besar")
      .regex(/[0-9]/, "Password harus mengandung angka")
      .regex(/[@$!%*?&]/, "Password harus mengandung simbol (@$!%*?&)"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Konfirmasi password tidak cocok",
    path: ["confirmPassword"],
  });

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, "Password minimal 6 karakter")
      .max(30, "Password maksimal 30 karakter")
      .regex(/[a-z]/, "Password harus mengandung huruf kecil")
      .regex(/[A-Z]/, "Password harus mengandung huruf besar")
      .regex(/[0-9]/, "Password harus mengandung angka")
      .regex(/[@$!%*?&]/, "Password harus mengandung simbol (@$!%*?&)"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Konfirmasi password tidak cocok",
    path: ["confirmPassword"],
  });
