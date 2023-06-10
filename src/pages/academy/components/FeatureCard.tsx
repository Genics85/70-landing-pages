type cardInfo = {
    doc:string,
    title:string,
    content:string
}
function FeatureCard({doc,title,content}:cardInfo) {
  return (
    <div className="rounded-md shadow p-6 flex flex-col gap-y-6 bg-white hover:scale-105 transition-transform duration-300">
    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-academyBg">
        <img src={doc} className="w-1/2 h-1/2 " alt="" />
    </div>
    <h4 className="text-xl font-bold">Managing<br/> Courses</h4>
    <p className="text-textGrey">Minim culpa minim id ea another se cupidatat.</p>
</div>
  )
}

export default FeatureCard