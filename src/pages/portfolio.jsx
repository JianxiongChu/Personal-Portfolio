import PortfolioCard from "../components/PortfolioCard";

export default function Portfolio() {
  return (
    <div className="flex flex-col h-full ml-48 mr-48">
      <PortfolioCard
        title="Smartwatch Dashboard System"
        linkStatus={{ code: true, page: false }}
      />
      <PortfolioCard
        title="Glitch React/State Tutorial"
        linkStatus={{ code: true, page: true }}
      />
    </div>
  );
}
