import { z } from "zod";

export const SignInformSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8characters long!"),
});