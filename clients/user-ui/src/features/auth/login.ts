import { z } from 'zod';
import { SignInformSchema } from "@/shared/schemas/signInSchema";

export type LoginSchema = z.infer<typeof SignInformSchema>;