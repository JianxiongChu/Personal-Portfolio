import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiAxios,
  SiFirebase,
  SiJavascript,
} from "react-icons/si";
import React from "react";
import { IconContext } from "react-icons";

const icons = {
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  SiJavascript: <SiJavascript />,
  FaReact: <FaReact />,
  FaPython: <FaPython />,
  FaJava: <FaJava />,
  SiTailwindcss: <SiTailwindcss />,
  SiTypescript: <SiTypescript />,
  SiAxios: <SiAxios />,
  SiFirebase: <SiFirebase />,
};

const SkillCard = ({ iconName, title = "???" }) => {
  const icon = icons[iconName] || "No icon";

  return (
    <IconContext.Provider value={{ color: "#2563eb", size: "6em" }}>
      <div className="m-4 w-40 h-40 border rounded-lg shadow-2xl flex items-center space-x-4 flex flex-col justify-center">
        {icon}
        {title}
      </div>
    </IconContext.Provider>
  );
};

export default SkillCard;
