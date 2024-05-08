import { z } from 'zod';

export const validationsSchema = z.object({
      name: z.string().min(1),
      age: z.number(),
      grade: z.string().min(1),
      classRoom: z.string(),
      mother: z.string().min(1),
      MonAge: z.number(),
      MonJob: z.string().min(1),
      father: z.string().min(1),
      DadAge: z.number(),
      DadJob: z.string().min(1),
      _id: z.string()
});

export type schemaPorp = z.infer<typeof validationsSchema>;

