import bgimg from "../../assets/academy/images/explorebg.png";
import explorphysics from "../../assets/academy/images/explorecard.png";
import avatar from "../../assets/academy/images/avarta.png";

function Explore() {
  return (
    <main className="p-5 md:p-20 bg-white gap-y-7 min-h-full flex flex-col justify-start items-start">
      <p className="text-1xl text-textGrey">COURSES</p>
      <h3 className="font-bold text-4xl">
        Explore Our <br /> Courses
      </h3>
      <div className="w-full grid grid-cols-4 gap-4">
        <div className="relative md:col-span-2 h:80  rounded-md ">
          <div className="absolute rounded-md bg-black w-full h-96">
            <img src={bgimg} className="w-full h-full rounded-md" alt="" />
          </div>
          <div
            className={`rounded-md  absolute opacity-70 bg-gradient-to-t from-black to-red-400 flex flex-col justify-between p-6 w-full h-full`}
          ></div>
          <div
            className={`rounded-md  relative bg-transparent  flex flex-col justify-between p-6 w-full h-80`}
          >
            <div className="text-1xl flex justify-center items-center rounded-full h-8 w-16 bg-academyBg">
              Math
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-bold text-4xl text-white">
                Ipsum dolor sit amet
                <br />
                consectetur
              </h3>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-x-3">
                  <div className="w-10 h-10 rounded-full shadow">
                    <img src={avatar} className="w-full h-full" alt="" />
                  </div>
                  <p className="text-1xl text-textGrey">Donat Twerski</p>
                </div>
                <div className="flex flex-row gap-x-4">
                  <h3 className="font-bold text-3xl text-white">$24</h3>
                  <button className="rounded-md bg-red-400 text-white text-1xl px-3 py-2 hover:cursor-pointer">
                    START NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start h-96 rounded-md shadow">
            <div className="relative" >
              <img src={explorphysics} className="w-full"  alt="" />
              <div className=" absolute flex justify-center items-center inset-0  w-20 rounded-full m-4 h-8 bg-red-200 text-1xl">Physics</div>
            </div>
            <div className="flex flex-col p-6 gap-y-3">
            <h4 className="text-2xl font-bold">Sed do eiusmod tempor</h4>
            <div className="flex space-x-4">
              <div className="w-7 h-7  rounded-full">
                <img src={avatar} className="w-full h-full" alt="" />
              </div>
              <p className="text-1xl text-textGrey">Ohta Kin</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">$24</div>
              <div className="border-academyPrimary border-2 text-academyPrimary px-2 py-1 rounded-md font-bold hover:cursor-pointer hover:bg-academyPrimary hover:text-white">
                START NOW
              </div>
            </div>
            </div>
            
        </div>
        <div className="flex flex-col justify-center h-80 bg-red-400 rounded-md ">
            
        </div>
        <div className="flex flex-col justify-center h-80 bg-red-400 rounded-md ">
            
        </div>
        <div className="flex flex-col justify-center h-80 bg-red-400 rounded-md ">
            
        </div>
      </div>
    </main>
  );
}

export default Explore;
