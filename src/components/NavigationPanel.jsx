import NavItem from "./NavItem";
import { BsFillHouseFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const NavigationPane = ({ focus, setFocus }) => {
  return (
    <IconContext.Provider value={{ size: "5em", color: "#2563eb" }}>
      <div className="flex flex-col bg-slate-400 h-screen fixed w-48">
        <div className="flex justify-center pt-6 pb-6">
          <BsFillHouseFill />
        </div>
        <div>
          <NavItem title="About Me" focused={focus} onClick={setFocus} />
          <NavItem title="My Resume" focused={focus} onClick={setFocus} />
          <NavItem title="My Portfolio" focused={focus} onClick={setFocus} />
          <NavItem title="Bonus Facts" focused={focus} onClick={setFocus} />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default NavigationPane;
