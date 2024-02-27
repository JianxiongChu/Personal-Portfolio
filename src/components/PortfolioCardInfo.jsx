import SMWCover from "../assets/PortfolioCover1.jpg";
import ReactStateCover from "../assets/PortfolioCover2.png";

export const Info = {
  "Smartwatch Dashboard System": {
    desc: (
      <p className="text-[1.25em] mb-2">
        A sophisticated interactive mobile application designed to provide
        diagnostic advisory based on smartwatch data records collected from
        patients.
        <br />
        Features:
        <ul className="pl-10 list-disc">
          <li>Mobile/Web Compaitibility</li>
          <li>In-line Form Input Manual</li>
          <li>Tabular/Graphical Demonstration</li>
          <li>User Feedback System</li>
        </ul>
      </p>
    ),
    codeLink: "https://github.com/JianxiongChu/INFSCI2470-Project/tree/master",
  },
  "Glitch React/State Tutorial": {
    desc: (
      <p className="text-[1.25em] mb-2">
        An in-class mini-project demonstrating an information page on usage of React's state property, as well as basic usage of useState hook.
        <br />
        Features:
        <ul className="pl-10 list-disc">
          <li>Interactable In-page Navigation</li>
          <li>Render-persistent Variables</li>
          <li>Portal to External Links</li>
        </ul>
      </p>
    ),
    codeLink: "https://glitch.com/~jic174-assignment2",
    pageLink: "https://jic174-assignment2.glitch.me/"
  },
};

export const Covers = {
  "Smartwatch Dashboard System": SMWCover,
  "Glitch React/State Tutorial": ReactStateCover,
};
