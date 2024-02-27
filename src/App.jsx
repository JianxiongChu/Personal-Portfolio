import React, {useState} from "react";
import Home from "./pages/home.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Bonus from "./pages/bonus.jsx";
import NavigationPane from "./components/NavigationPanel";


// Import and apply CSS stylesheet
import "./styles/styles.css";

const pages = {
  "About Me": <Home />,
  "My Portfolio": <Portfolio />,
  "Bonus Facts": <Bonus />
}

export default function App() {
  const [focus, setFocus] = useState("About Me");

  const page = pages[focus] || <Home />;

  return (
    <div className="flex flex-row">
      <div>
        <NavigationPane focus={focus} setFocus={setFocus}/>
      </div>
      <div className="pl-40 w-full">
        {page}
      </div>
    </div>
  );
}
