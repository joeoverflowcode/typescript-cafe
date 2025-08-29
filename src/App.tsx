import "./App.css";
import MenuList from "./components/MenuList";
import { validMenu } from "./data/menu";


function App() {

  return (
    <>
      <MenuList data={validMenu}/>
    </>
  );
}

export default App;
