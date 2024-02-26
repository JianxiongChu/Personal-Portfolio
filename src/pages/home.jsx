import * as React from "react";
import profile from "../assets/sus.gif";
import SkillCard from "../components/SkillCard";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Home() {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-2/3 flex flex-col pt-12 pl-24">
        <h1 className="text-7xl pb-24">Hail and well met!</h1>
        <p className="text-2xl text-wrap pb-12">
          My name is <em className="text-4xl text-blue-600"> Jianxiong Chu</em>,
          an international student from China studying in the United States, you
          may also call me <em className="text-4xl text-blue-600">Russell</em>{" "}
          at your convenience.
        </p>
        <p className="text-2xl text-wrap pb-12">
          I am studying for my{" "}
          <em className="text-4xl">
            master's degree at University of Pittsburgh
          </em>{" "}
          and major in <em className="text-4xl">Information Science</em>. In
          prior, I obtained my{" "}
          <em className="text-4xl">bachelor's degree in Computer Science</em>{" "}
          from <em className="text-4xl">Truman State University</em>.
        </p>
        <p className="text-2xl text-wrap pb-12">
          Besides that, I am also an aspiring{" "}
          <em className="text-4xl">Front End Developer</em> who is a trained
          practitioner of a variety of frameworks including{" "}
          <em className="text-4xl">
            HTML/CSS/JS(ES6), React, React Native, and Google Firebase
          </em>
          . For a detailed summary of skills I possess, please take a look at{" "}
          <button className="active:text-purple-600 text-blue-600">
            my resume
          </button>
          .
        </p>

        <h2 className="text-3xl text-wrap font-bold">Skills</h2>
        <hr />
        <div className="flex flex-wrap justify-center w-full">
          <SkillCard iconName="FaHtml5" title="HTML 5" />
          <SkillCard iconName="FaCss3Alt" title="CSS" />
          <SkillCard iconName="SiJavascript" title="JavaScript(ES6)" />
          <SkillCard iconName="SiTypescript" title="TypeScript" />
          <SkillCard iconName="FaReact" title="React/React Native" />
          <SkillCard iconName="FaPython" title="Python 3" />
          <SkillCard iconName="FaJava" title="Java" />
          <SkillCard iconName="SiTailwindcss" title="Tailwind CSS" />
          <SkillCard iconName="SiFirebase" title="Google Firebase" />
          <SkillCard iconName="SiAxios" title="Axios" />
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-start items-center ">
        <img className="pt-6" alt="profile" src={profile} />
          Email: xsjwj234884@gmail.com (Personal)
          <br />
          Tel: 660-280-4597
          <br />

        <h2 className="text-3xl text-wrap font-bold bg-slate-400 rounded m-4 p-4 text-white">My Other Profiles</h2>
        <IconContext.Provider value={{ size: "3em", color: "#2563eb" }}>
          <div className="flex justify-between w-full pl-40 pr-40">
            <a
              href="https://www.linkedin.com/in/jianxiong-chu-793949269/"
              className="flex justify-center pb-3"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/JianxiongChu"
              className="flex justify-center pb-3"
            >
              <BsGithub />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
