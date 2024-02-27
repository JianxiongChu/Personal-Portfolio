import { Info, Covers } from './PortfolioCardInfo';


export default function PortfolioCard({title}) {
  return (
    <div className="flex flex-row m-4 rounded border-4 w-full h-[26em]">
      <img alt="cover" className="object-none w-1/3 rounded" src={Covers[title]} />
      <div className="m-4 w-2/3">
        <h2 className="text-3xl text-wrap m-4 font-bold">{title}</h2>
        <hr />
        {Info[title].desc}
        <a href={Info[title].link} className="text-3xl active:text-purple-600 text-blue-600">Code</a>
      </div>
    </div>
  );
}
