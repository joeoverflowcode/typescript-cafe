import type { CafeItemDetail } from "../types/cafe.types";

export const mateoMenu: CafeItemDetail[] = [
    {
    id: "meal-1",
    name: "Meatballs and Rice",
    imageUrl: "/images/meatballs-rice.jpg",
    category: "meal",
    description: "Swedish meatballs served with rice.",
    ingredients: ["beef meatballs", "white rice",],
    nutrition: {
      calories: 450,
      protein: 20,
      carbs: 55,
      fats: 15,
    },
  },
  {
    id: "meal-2",
    name: "Noodles and Grilled Chicken",
    imageUrl: "/images/noodles-chicken.jpg",
    category: "meal",
    description: "Soft noodles topped with tender grilled chicken.",
    ingredients: ["noodles", "grilled chicken", "carrots"],
    nutrition: {
      calories: 420,
      protein: 25,
      carbs: 50,
      fats: 12,
    },
  },
  {
    id: "meal-3",
    name: "Ham and Cheese Sandwich",
    imageUrl: "/images/ham-cheese-sandwich.jpg",
    category: "meal",
    description: "Ham and cheese sandwich served on sourdogh.",
    ingredients: ["ham", "cheddar cheese", "bread"],
    nutrition: {
      calories: 380,
      protein: 18,
      carbs: 35,
      fats: 16,
    },
  },
  {
    id: "meal-4",
    name: "Egg & Hotdog Burrito",
    imageUrl: "/images/egg-hotdog-burrito.jpg",
    category: "meal",
    description: "Egg omelette and a sliced hotdog wrapped in a tortilla.",
    ingredients: ["eggs", "hotdog", "flour tortilla", "cheese"],
    nutrition: {
      calories: 400,
      protein: 22,
      carbs: 38,
      fats: 14,
    },
  },

//Snacks
  {
    id: "snack-1",
    name: "Hardboiled Egg",
    imageUrl: "/images/hardboiled-egg.jpg",
    category: "snack",
    description: "A protein-packed hardboiled egg, simple and healthy.",
    ingredients: ["egg"],
    nutrition: { calories: 70, protein: 6, carbs: 1, fats: 5 },
  },
  {
    id: "snack-2",
    name: "Beef Jerky Stick",
    imageUrl: "/images/beef-jerky-stick.jpg",
    category: "snack",
    description: "A beef jerky stick.",
    ingredients: ["beef jerky"],
    nutrition: { calories: 116, protein: 9, carbs: 3, fats: 7 },
  },

  // Dessert
  {
    id: "dessert-1",
    name: "Mixed Berries and Watermelon",
    imageUrl: "/images/mixed-berries.jpg",
    category: "dessert",
    description: "A mix of berries and Watermelon.",
    ingredients: ["strawberries", "blueberries", "blackberries", "watermelon"],
    nutrition: {
      calories: 90,
      protein: 1,
      carbs: 22,
      fats: 0,
    },
  },
  {
    id: "dessert-2",
    name: "Peanut Butter and Apples",
    imageUrl: "/images/peanut-butter-apples.jpg",
    category: "dessert",
    description: "Apple slices served with peanut butter dip.",
    ingredients: ["apples", "peanut butter"],
    nutrition: {
      calories: 150,
      protein: 5,
      carbs: 18,
      fats: 7,
    },
  },
  {
    id: "dessert-3",
    name: "Banana and Dates",
    imageUrl: "/images/banana-dates.jpg",
    category: "dessert",
    description: "Banana paired with 1 date.",
    ingredients: ["bananas", "dates"],
    nutrition: {
      calories: 180,
      protein: 2,
      carbs: 45,
      fats: 0,
    },
  },

  // Drinks
  {
    id: "drink-1",
    name: "Whole Milk",
    imageUrl: "/images/whole-milk.jpg",
    category: "drink",
    description: "A small container of whole milk.",
    ingredients: ["whole milk"],
    nutrition: {
      calories: 150,
      protein: 8,
      carbs: 12,
      fats: 8,
    },
  },
  {
    id: "drink-2",
    name: "Orange Juice",
    imageUrl: "/images/orange-juice.jpg",
    category: "drink",
    description: "Orange juice not from concentrate",
    ingredients: ["oranges"],
    nutrition: {
      calories: 110,
      protein: 2,
      carbs: 26,
      fats: 0,
    },
  },
]