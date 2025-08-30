import * as z from 'zod'

export const menuItemSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string()

})

export const menuItemArraySchema = z.array(menuItemSchema)

export type MenuItem = z.infer<typeof menuItemSchema>
export type MenuItemArray = z.infer<typeof menuItemArraySchema>