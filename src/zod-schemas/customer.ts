import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { customers } from "@/db/schema";

export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: (schema) => schema.min(1, "First name is required."),
  lastName: (schema) => schema.min(1, "Last name is required."),
  address1: (schema) => schema.min(1, "Address is required"),
  city: (schema) => schema.min(1, "City is required"),
  state: (schema) => schema.length(2, "State must be exactly 2 characters"),
  zip: (schema) =>
    schema.regex(
      /^\d{5}(-\d{4})?$/,
      "Zip code must be exactly 5 digits or 9 digits with a hyphen"
    ),
  email: (schema) => schema.email("Invalid email address"),
  phone: (schema) =>
    schema.regex(
      /^\d{3}-\d{3}-\d{4}$/,
      "Phone number must be in the format 123-456-7890"
    ),
});

export const selectCustomerSchema = createSelectSchema(customers);

export type insertCustomerSchemaType = typeof insertCustomerSchema._type;

export type selectCustomerSchemaType = typeof selectCustomerSchema._type;
