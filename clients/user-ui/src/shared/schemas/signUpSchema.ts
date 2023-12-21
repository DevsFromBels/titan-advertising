import { z } from "zod";

const SignUpSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long!"),
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8characters long!"),
});

export  { SignUpSchema };