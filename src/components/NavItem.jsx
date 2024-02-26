import { twMerge } from "tailwind-merge";
import className from "classnames";

const NavItem = ({ title, icon, focused, onClick }) => {
  const handleClick = () => {
    console.log("Heyyy!");
    onClick(title);
    if (title === "My Resume") {
      onClick("About Me")
      window.location.href = "https://docs.google.com/document/d/1WQutooy5bifptCrl4Ycqe5UxXtZQ9CJm/edit?usp=sharing&ouid=102883180359812654779&rtpof=true&sd=true";
    }
  };

  const classes = twMerge(
    className("h-20 w-full", {
      "bg-blue-600 text-white hover:bg-blue-800 active:border active:border-white":
        title !== focused,
      "bg-white text-blue-800": title === focused,
    })
  );

  return (
    <button className={classes} onClick={handleClick}>
      <div className="place-content-center">{icon}</div>
      <h2>{title}</h2>
    </button>
  );
};

export default NavItem;
