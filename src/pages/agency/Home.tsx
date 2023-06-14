import home from "../../assets/agency/home.png"
function Home() {
  return (
    <div className='px-5 flex flex-col md:flex-row gap-4 justify-between items-center md:px-20 lg:px-24 min-h-screen bg-gradient-to-t from-agencyPrimary to-agencySecondary'>
        <div className="flex flex-col gap-4 items-start md:w-2/3">
            <p className="text-agencyAccent font-bold">CREATIVE AGENCY</p>
            <h4 className="text-3xl md:text-4xl">
                We Make <br/> Websites.
            </h4>
            <p>Officia qui elit laboris laborum esse proident aliqua minim.</p>
            <button className="border rounded-md border-agencyAccent py-1 px-2 bg-agencyAccent text-white hover:bg-transparent hover:text-agencyAccent">
                Explore Our Work
            </button>
        </div>
        <div className="-mx-5 md:-mr-20 lg:-mr-24 ">
            <img src={home} alt="" />
        </div>
    </div>
  )
}

export default Home