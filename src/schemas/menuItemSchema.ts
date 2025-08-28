import * as z from "zod"

export const cafeCategorySchema = z.enum(["meal", "snack", "dessert", "drink" ])

export const cafeItemPreviewSchema = z.object({
    id: z.string(),
    name: z.string(),
    imageUrl: z.url(),
    category: cafeCategorySchema
})

export const cafeItemDetailSchema = cafeItemPreviewSchema.extend({
    description: z.string(),
    ingredients: z.array(z.string()),
    nutrition: z.object({
        calories: z.number(),
        protein: z.number(),
        carbs: z.number(),
        fats: z.number(),
    }).optional()
})

export type CafeItemDetail = z.infer<typeof cafeItemDetailSchema>