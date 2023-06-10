import stats from "../../assets/academy/images/stats.png";

function About() {
  return (
    <main className="p-5 md:p-20 bg-academyBg gap-y-12 md:gap-y-20 min-h-full flex flex-col justify-start items-start">
      <div className="flex flex-col items-center gap-y-8 md:flex-row justify-between">
        <div className="rounded-md  md:w-2/5">
          <img src={stats} className="w-full" alt="" />
        </div>
        <div className="flex flex-col items-start gap-4 md:w-1/2">
          <p className="text-1xl text-textGrey">About</p>
          <h3 className="text-4xl font-bold ">
            Success Can
            <br /> Be Achieved
          </h3>
          <p className="text-1xl md:w-3/5">
            Sunt ad occaecat voluptate quis veniam amet magna reprehenderit aute
            ipsum deserunt culpa. Velit in eiusmod nostrud mollit eu deserunt
            cupidatat quis anim enim excepteur nisi officia. A
          </p>
          <div className="border-academyPrimary rounded-md text-1xl border-2 py-1 px-2 text-academyPrimary hover:bg-academyPrimary hover:cursor-pointer hover:text-white">
            ABOUT US
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full md:gap-x-24 gap-y-6">
        <div className="flex flex-col items-center justify-center gap-y-1">
          <h3 className="text-5xl font-bold">
            42<sup className="font-normal">+</sup>
          </h3>
          <p>Duis Aute Irure</p>
          <p className="text-textGrey">Cillum dolore</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-1">
          <h3 className="text-5xl font-bold">
            73<sup className="font-normal">%</sup>
          </h3>
          <p>Dolor in Reprehenderit</p>
          <p className="text-textGrey">Fugiat nulla</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-1">
          <h3 className="text-5xl font-bold">
            50<sup className="font-normal">.000</sup>
          </h3>
          <p>Voluptate Velite Esse</p>
          <p className="text-textGrey">Escepteur sint</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-y-8">
        <p className="text-textGrey text-xl">LEARN EASY</p>
        <h3 className="text-4xl font-bold">HOW WE WORK</h3>
        <div className="flex flex-col gap-y-7">
          <div className="">
            <div className="flex flex-col rounded-md shadow md:flex-row md:w-11/12">
              <div className="flex justify-center items-center bg-academyBg font-bold p-6 text-6xl md:w-1/3">
                01
              </div>
              <div className="flex flex-col p-6 gap-y-4 bg-white">
                <p className="font-bold text-xl">Start Learning</p>
                <p className="text-textGrey text-xl">
                  Do t elit labore amet eu laborum sit ip
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end ">
            <div className=" flex flex-col rounded-full shadow md:flex-row-reverse  md:w-11/12">
              <div className="flex justify-center items-center bg-red-100 font-bold p-6 text-6xl md:w-1/3">
                02
              </div>
              <div className="flex flex-col p-6 gap-y-4 bg-white">
                <p className="font-bold text-xl">Start Learning</p>
                <p className="text-textGrey text-xl">
                  Do t elit labore amet eu laborum sit ip
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" flex flex-col rounded-md shadow md:flex-row md:w-11/12">
              <div className="flex justify-center items-center bg-red-300 font-bold p-6 text-6xl md:w-1/3">
                03
              </div>
              <div className="flex flex-col p-6 gap-y-4 bg-white">
                <p className="font-bold text-xl">Start Learning</p>
                <p className="text-textGrey text-xl">
                  Do t elit labore amet eu laborum sit ip
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
