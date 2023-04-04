import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["New Delhi", "Mumbai", "Jaipur", "Udipur", "Jhodhpur", "Ajmer"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(true);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)} >My Alert </Alert>}
      <Button children="My  test Button"  onButtonClick={() => setAlertVisibility(true)}></Button>
    </div>
  );
}

export default App;
