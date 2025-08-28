export type CafeCategory = "meal" | "snack" | "drink" | "dessert";

export interface CafeItemPreview {
  id: string;
  name: string;
  imageUrl: string;
  category: CafeCategory;
}

export interface CafeItemDetail extends CafeItemPreview {
    description: string;
    ingredients: string[];
    nutrition? : {
        calories: number;
        protein: number;
        carbs: number;
        fats: number;
    }
}