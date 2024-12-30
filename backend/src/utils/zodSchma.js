import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(1, 'Title must be at least 1 character long'),
  description: z.string().optional(),
  status: z.enum(["To Do", "In Progress", "Done"]).default("To Do"),
});
