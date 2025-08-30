import { menuItemSchema, menuItemArraySchema } from "../types/menu";
import z from "zod";
export const menu = [
  {
    id: "1",
    name: 56448,
    description: "ham sandwich",
  },
  {
    id: 2,
    name: "soda",
    description: "fountain drink",
  },
  {
    id: "3",
    name: "ice cream",
    // description: "chocolate ice cream",
  },
];

export const validMenu: z.infer<typeof menuItemArraySchema> = [];
export const invalidMenu: any[] = [];

menu.forEach((item, idx) => {
  const result = menuItemSchema.safeParse(item);

  if (result.success) {
    validMenu.push(result.data);
  } else {
    // const tree = z.treeifyError(result.error);
    // console.log(`Invalid menu item at index ${idx}:`, item);
    // console.log(tree);
    const pretty = z.prettifyError(result.error)
    // console.log(pretty)
    invalidMenu.push({ item, error: pretty });
  }
});
