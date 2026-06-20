import * as z from 'zod';

export const signUpSchema = z
  .object({
    name: z.string().min(1, 'Nama wijib diisi.'),
    email: z.email(),
    password: z
      .string()
      .min(1, 'Password wajib diisi.')
      .min(8, 'Password minimal 8 karakter.')
      .regex(/[A-Z]/, 'Password harus mengandung minimal 1 huruf kapital')
      .regex(/[0-9]/, 'Password harus mengandung minimal 1 angka'),
    confirmPassword: z.string().min(1, 'Konfirmasi password wajib diisi.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password dan konfirmasi password tidak cocok',
    path: ['confirmPassword'],
  });

export type signUpValue = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(1, 'Password wajib diisi.')
    .min(8, 'Password minimal 8 karakter.')
    .regex(/[A-Z]/, 'Password harus mengandung minimal 1 huruf kapital')
    .regex(/[0-9]/, 'Password harus mengandung minimal 1 angka'),
  rememberMe: z.boolean(),
});

// export type signInValue = z.infer<typeof signInSchema>;
