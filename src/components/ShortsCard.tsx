

const ShortsCard=(props:any)=>{
    return<>
    <div className=" mx-1 my-3 cursor-pointer">
  {/* Image Section */}
  <img
    src={props.imagelink}
    alt="Thumbnail"
    className="h-80 w-full max-w-full mx-auto rounded-lg object-cover"
  />

  {/* Content Section */}
  <div className="grid grid-cols-12 mt-1 ">
    {/* Title and Views */}
    <div className="col-span-10 flex flex-col justify-center ml-1">
      <p className="text-xs font-medium text-left">
     {props.title}
      </p>
      <p className="text-xs text-gray-400 mt-1">{props.views}</p>
    </div>

    {/* Menu Icon */}
    <div className="col-span-2 flex mx-4 mt-2">
      <div className="space-y-1">
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  </div>
</div>

    </>
}


export default ShortsCard