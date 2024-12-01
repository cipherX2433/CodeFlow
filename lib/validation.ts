import { z } from 'zod';

export const SignInSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Please provide a valid email address." }),
    
    password: z
        .string()
        .min(6, { message: "Password must be atleast 6 char long." })
        .max(100, { message: "Password cannot exceed 100 char." }),
});

export const SignUpSchema = z.object({
    username: z
    .string()
    .min(3, { message: "Username must be atleast 3 char" })
    .max(30, { message: "Username cannot exceed 30 char" })
    .regex(/^[a-zA-Z0-9_]+$/, {
        message: "Username can only contain letters, numbers and underscore.",
    }),

    name: z
        .string()
        .min(1, { message: "Name is required" })
        .max(50, { message: "Name cannot exceed 50 char" })
        .regex(/^[a-zA-Z\s]+$/, {
            message: "Name can only contain letters and space",
        }),

    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Please provide a valid email address." }),
    
    password: z
        .string()
        .min(6, { message: "Password must be atleast 6 char long." })
        .max(100, { message: "Password cannot exceed 100 char." })
        .regex(/[A-Z]/, {
            message: "Password must contain atleast one uppercase letter",
        })
        .regex(/[a-z]/, {
            message: "Password must contain atleast one lowercase letter",
        })
        .regex(/[0-9]/, {
            message: "Password must contain atleast one digit",
        })
        .regex(/[^A-Za-z0-9]/, {
            message: "Password must contain atleast one special character",
        }),
});