'use client'
import { z } from "zod";
import { SignUpSchema } from "@/shared/schemas/signUpSchema";

export type SignUpSchema = z.infer<typeof SignUpSchema>;
