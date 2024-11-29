import { z } from "zod";

export const servicoFormSchema = z.object({
  name: z
    .string({
      required_error: "O nome é obrigatório",
    })
    .min(1),
  description: z.string().optional(),
  price: z.coerce
    .number()
    .positive("O valor precisa ser positivo")
    .max(500000, "Serviço precisa ter o preço menor"),
  category: z
    .string({
      required_error: "O Serviço precisa ter uma categoria",
    })
    .min(1),
  isActive: z.boolean().default(true),
  durationInMinutes: z.coerce
    .number()
    .int()
    .positive("Duração tem que ser maior que 0")
    .max(60 * 12, `Duração tem que ser menor que 12 horas (${60 * 12}minutos)`),
});
