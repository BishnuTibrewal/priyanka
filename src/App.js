import "./App.css";
import Slide1 from "./Components/Slide1";
import { useState } from "react";
import Slide2 from "./Components/Slide2";
import Slide3 from "./Components/Slide3";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

function App() {
  const [slide1visibility, setslide1visibility] = useState(true);
  const [slide2visibility, setslide2visibility] = useState(false);
  const [slide3visibility, setslide3visibility] = useState(false);

  const closeSlide1 = () => {
    setslide1visibility(false);
    setslide2visibility(true);
  };
  const closeSlide2 = () => {
    setslide2visibility(false);
    setslide3visibility(true);
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: " #EA738D", height: "100vh", padding: "50px" }}
    >
      {slide1visibility && <Slide1 closeSlide1={closeSlide1}></Slide1>}
      {slide2visibility && <Slide2 closeSlide2={closeSlide2}></Slide2>}
      {slide3visibility && <Slide3></Slide3>}
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        <b>Here is a gentle reminder, I love you !!.</b>
      </Alert>
    </div>
  );
}

export default App;
