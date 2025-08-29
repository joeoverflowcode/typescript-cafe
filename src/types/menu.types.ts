import * as z from "zod"

export const menuItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string()
})

export type MenuItem = z.infer<typeof menuItemSchema>

export const MenuSchema = z.array(menuItemSchema)
export type Menu = z.infer<typeof MenuSchema>