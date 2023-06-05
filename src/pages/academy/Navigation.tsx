function Navigation() {
  return (
    <nav className="w-screen p-3 bg-academyBg h-14 flex justify-between items-center">
      <h3 className="text-3xl font-bold">ACA</h3>
      <ul className="space-x-8 hidden md:flex">
        <li>
          <a className="hover:cursor-pointer hover:text-academyPrimary">
            {" "}
            Courses
          </a>
        </li>
        <li>
          <a className="hover:cursor-pointer hover:text-academyPrimary">
            {" "}
            About
          </a>
        </li>
        <li>
          <a className="hover:cursor-pointer hover:text-academyPrimary">
            Services{" "}
          </a>
        </li>
        <li>
          <a className="hover:cursor-pointer hover:text-academyPrimary">
            Events{" "}
          </a>
        </li>
        <li>
          <a className="hover:cursor-pointer hover:text-academyPrimary">
            {" "}
            Blog
          </a>
        </li>
      </ul>
      <button className="hidden border-2 rounded-md border-academyPrimary text-academyPrimary px-3 py-1 text-sm hover:text-white hover:bg-academyPrimary md:block">
        CONTACT
      </button>
      <div className="h-10 w-10 rounded-md border-academyPrimary border-2">
        
      </div>
    </nav>
  );
}

export default Navigation;
