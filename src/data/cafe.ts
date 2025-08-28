import { cafeMenuSchema } from "../types/cafe.types"


const menu = [
    {
    id: 1,
    name: "sandwich",
    description: "ham and cheese sandwhich",
  },
  {
    id: "2",
    name: "drink",
    description: "fountain drink",
  }
]

const validation = cafeMenuSchema.safeParse(menu)
if (!validation.success) {
  throw new Error("cafe menu data invalid:"+ validation.error)
}

export const validMenu = validation.data