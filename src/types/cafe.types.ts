import * as z from "zod"

export const cafeItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string()
})

export type CafeItem = z.infer<typeof cafeItemSchema>

export const cafeMenuSchema = z.array(cafeItemSchema)
export type CafeMenu = z.infer<typeof cafeMenuSchema>