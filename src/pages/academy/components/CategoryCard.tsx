import React from 'react'

type cardProp = {
    name:string,
    icon:string,
    bgcolor:string,
}

function CategoryCard({name,icon,bgcolor}:cardProp) {
  return (
    <div className={` flex flex-col gap-y-3 w-20 h-48 rounded-md bg-${bgcolor}`}>

    </div>
  )
}

export default CategoryCard