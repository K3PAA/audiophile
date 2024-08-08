import { z } from "zod";

export const checkoutFormSchema = z.object({
  name: z.string().min(2, "required"),
  email: z.string().email("Wrong format"),
  phone: z.string().min(8, "required"),
  address: z.string().min(2, "required"),
  zip_code: z.string().min(5, "required"),
  city: z.string().min(2, "required"),
  country: z.string().min(2, "required"),
  paymentMethod: z.enum(["cash-on-delivery", "e-money"]),
  eMoneyNumber: z.string(),
  eMoneyPin: z.string(),
});
