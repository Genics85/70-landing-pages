import CategoryCard from './components/CategoryCard';
import math from "../../assets/academy/images/math.png";
import physics from "../../assets/academy/images/physics.png";
import chemistry from "../../assets/academy/images/chemistry.png";
import informatics from "../../assets/academy/images/informatics.png";

function Categories() {
  return (
    <main className="p-5 md:p-20 bg-white gap-y-7 min-h-full flex flex-col items-center">
        <p className="text-textGrey text-sm">EXPLORE NOW</p>
        <h3 className="font-bold text-4xl">Categories</h3>
        <p className="text-textGrey">Eu sint amet enim eiusmod ipsum commodo <br/> non pariatur excepteur tempor exercitation fugiat.</p>
        <div className='flex gap-x-5 overflow-x-auto w-full justify-center'>
            <CategoryCard name="Math" bgcolor="#e3f0ff" icon={math}/>
            <CategoryCard name="Physics" bgcolor="rgb(255,242,222)" icon={physics}/>
            <CategoryCard name="Chemistry" bgcolor="rgb(236,255,215)" icon={chemistry}/>
            <CategoryCard name="Informatics" bgcolor="#ffe2e5" icon={informatics}/>
        </div>
        <button className="px-3 py-1 text-sm rounded-md border-2 border-academyPrimary text-academyPrimary hover:bg-academyPrimary hover:text-white">
          EXPLORE ALL
        </button>
    </main>
  )
}

export default Categories