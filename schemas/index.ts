import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  passwrd: z.string(),
});
