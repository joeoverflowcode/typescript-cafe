import "./App.css";
import { invalidMenu } from "./data/menu";
// import MenuList from "./components/MenuList";

function App() {

  if (invalidMenu.length > 0 ) {
    console.error('Bad Data!:',invalidMenu)
  }
  return (
    <>
      {/* {validMenu.length === 0 ? (
        <div>
          No valid menu items available. Please check data or console for validation
          errors.
        </div>
      ) : (
        <MenuList data={validMenu} />
      )} */}
    </>
  );
}

export default App;
