function Explore() {
  return (
    <main className="p-5 md:p-20 bg-white gap-y-7 min-h-full flex flex-col justify-start items-start">
      <p className="text-1xl text-textGrey">COURSES</p>
      <h3 className="font-bold text-4xl">
        Explore Our <br /> Courses
      </h3>
      <div className="w-full flex gap-x-4 md:flex-col md:gap-y-4">
        <div className="relative md:w-1/2 h:80  rounded-md">
          <div className="absolute z-20 rounded-md w-full h:80" style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}></div>
            {/* <div
            className={`rounded-md  absolute opacity-50 bg-gradient-to-t from-black to-blue-400  flex flex-col justify-between p-6 w-full h-80`}
          ></div> */}
          <div
            className={`rounded-md  absolute bg-transparent  flex flex-col justify-between p-6 w-full h-80`}
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
                  <div className="w-10 h-10 rounded-full bg-white shadow"></div>
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
      </div>
    </main>
  );
}

export default Explore;
