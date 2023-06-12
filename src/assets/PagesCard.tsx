import React from 'react'

type cardProps = {
    img:string,
    name:string,
}

function PagesCard({img,name}:cardProps) {
  return (
    <div className=''>
        <div className="group relative h-fit rounded-md shadow-lg shadow-[#00a6fb] bg-white hover:cursor-pointer">
          <img src={img} alt="" />
          <div className="absolute inset-0 opacity-80 hover:opacity-0 z-10 w-full h-full bg-black rounded-md"></div>
          <div className="group-hover:hidden absolute mx-auto my-auto h-fit w-fit z-20 inset-0 text-white font-bold text-4xl">
            {name}
          </div>
        </div>
    </div>
  )
}

export default PagesCard