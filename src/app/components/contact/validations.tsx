import { z } from "zod"

export const validationSchema = z.object({
  name: z.string({
    required_error: "Name is required.",
  }),
  email: z
    .string({
      required_error: "Email is required.",
    })
    .email(),
  business: z.string({
    required_error: "Business Name is required.",
  }),
  service: z.string({
    required_error: "Interested Service is required.",
  }),
  message: z.string({
    required_error: "Message is required.",
  }),
});