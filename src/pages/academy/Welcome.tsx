import welcome from "../../assets/images/welcome.png";

function Welcome() {
  return (
    <main className="p-20 min-h-screen bg-academyBg">
      <div className="container flex flex-col-reverse justify-between md:flex-row md:space-x-4 space-y-4">
        <div className="flex flex-col justify-center items-start space-y-4 md:w-2/5">
          <p className="text-sm text-textGrey">MODERN</p>
          <h4 className="text-6xl font-bold">Education <br/> Academy</h4>
          <p className="text-textGrey">
            Laboris laborum velit do aute proident deserunt ullamco dolore magna
            elit id qui officia.
          </p>
          <button className="flex text-sm font-bold justify-center items-center bg-academyPrimary rounded-md text-white px-5 py-2">
            COURSES
          </button>
        </div>
        <img src={welcome} className=" md:w-2/5" alt="Image at the welcome section" />
      </div>
    </main>
  );
}

export default Welcome;
