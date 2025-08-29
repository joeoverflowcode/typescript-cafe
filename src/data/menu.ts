import { MenuSchema, type Menu } from "../types/menu.types";

const menu = [
  {
    id: "1",
    name: "sandwich",
    description: "ham and cheese sandwhich",
  },
  {
    id: "2",
    name: "drink",
    description: "fountain drink",
  },
];

const validation = MenuSchema.safeParse(menu);
if (!validation.success) {
  validation.error;
} else {
  validation.data
}

export const validMenu = validation.data;
