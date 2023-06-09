import PagesCard from "./assets/PagesCard";
import academy from "./assets/images/academy.png";
import agency from "./assets/images/agency.png";
import manage from "./assets/images/manage(1).png";
import foundation from "./assets/images/foundation.png";

function AllPages() {
  return (
    <div className="p-5 md:p-20 md:pt-10 bg-[#051923] min-h-screen space-y-12">
      <h4 className="text-white font-bold text-4xl md:text-6xl w-full text-center" >
        Landing Pages by Genics85
      </h4>
      <div className=" grid  grid-cols-2 justify-center items-center md:grid-cols-4 gap-4 ">
        <PagesCard img ={academy} name="Academy" to={"https://academy-landing-page-one.vercel.app/"}/>
        <PagesCard img ={agency} name="Agency" to={"https://agency-landing-page-delta.vercel.app/"}/>
        <PagesCard img ={manage} name="Manage" to={"https://tailwind-manage-website.vercel.app/"}/>
        <PagesCard img ={foundation} name="Charity" to={"https://oliver-foundation.web.app/"}/>
      </div>
    </div>
  );
}

export default AllPages;
