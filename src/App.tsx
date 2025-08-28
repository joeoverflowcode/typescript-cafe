import "./App.css";
import CafeMenu from "./components/CafeMenu";
import { validMenu } from "./data/cafe";


function App() {

  return (
    <>
      <CafeMenu data={validMenu}/>
    </>
  );
}

export default App;
