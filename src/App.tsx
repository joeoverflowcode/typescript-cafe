import "./App.css";
import CafeMenu from "./components/CafeMenu";
import { mateoMenu } from "./data/cafe";
import { cafeItemDetailSchema } from "./schemas/menuItemSchema";
import type { CafeItemDetail } from "./schemas/menuItemSchema";

const exampleItem = {
    id: "1",
  name: "Spaghetti and Meatballs",
  imageUrl: "https://example.com/meatballs.jpg",
  category: "meal",
  description: "Classic italian",
  ingredients: ["meatballs", "spaghetti", "tomato sauce"],
  nutrition: {
    calories: 450,
    protein: 25,
    carbs: 50,
    fats: 15,
  },
}


function App() {
  const result = cafeItemDetailSchema.safeParse(exampleItem)
let validatedData: CafeItemDetail[] = []
  if (result.success) {
  const cafeItem = result.data
  console.log("valid:", cafeItem)
  validatedData = [cafeItem]
} else {
  console.error('error', result.error)
}
  return <><CafeMenu data={mateoMenu}/>
  <CafeMenu data={validatedData}/>
</>;
}

export default App;
