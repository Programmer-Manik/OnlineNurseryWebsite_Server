import { z } from "zod";

const createProductValidation = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .min(1, { message: "Name cannot be empty" }),

    description: z
      .string({
        required_error: "Description is required",
        invalid_type_error: "Description must be a string",
      })
      .min(1, { message: "Description cannot be empty" }),

    price: z
      .number({
        required_error: "Price is required",
        invalid_type_error: "Price must be a number",
      })
      .positive({ message: "Price must be a positive number" }),

    category: z
      .string({
        required_error: "Category is required",
        invalid_type_error: "Category must be a string",
      })
      .min(1, { message: "Category cannot be empty" }),

    stock: z
      .number({
        required_error: "Stock is required",
        invalid_type_error: "Stock must be a number",
      })
      .int({ message: "Stock must be an integer" })
      .min(0, { message: "Stock cannot be negative" }),

    image: z
      .string({
        required_error: "Image is required",
        invalid_type_error: "Image must be a string",
      })
      .url({ message: "Image must be a valid URL" }),

    status: z.enum(["OUT-OF-STOCK", "IN-STOCK"], {
      required_error: "Status is required",
      invalid_type_error: "Status must be either 'OUT-OF-STOCK' or 'IN-STOCK'",
    }),
  }),
});

export const ProductValidation ={
    createProductValidation
}