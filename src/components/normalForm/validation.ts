import { z } from "zod";

export const SignUpSchema = z.object({
   name: z.string().min(1, "name is required"),
   email: z.string().email().min(1, "Email Is Required"),
   password: z.string().min(8, "Password Is Too Short"),
 });

 export type TNormalForm = z.infer<typeof SignUpSchema>;
