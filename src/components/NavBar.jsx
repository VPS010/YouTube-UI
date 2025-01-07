const NavBar = () => {
    return (
      <div className="flex items-center w-full p-2 text-white sticky top-0 bg-black ">
        <div className="ml-1 flex items-center cursor-pointer">
          <div className="space-y-1">
            <div className="bg-slate-300 w-5 h-0.5 rounded-full"></div>
            <div className="bg-slate-300 w-5 h-0.5 rounded-full"></div>
            <div className="bg-slate-300 w-5 h-0.5 rounded-full"></div>
          </div>
        </div>
  
        <div className="flex items-center mx-4 cursor-pointer">
          <img
            src="/YouTube_full-color_icon_(2017).svg.png"
            alt="YouTube Logo"
            className="w-7 h-5 mr-0"
          />
          <div className="ml-1 text-lg font-semibold ">YouTube</div>
        </div>
  
        {/* Search Bar */}
        <div className="flex flex-grow items-center justify-center">
          <div className="flex items-center w-full max-w-xl">
            <input
              type="text"
              className="w-full bg-black rounded-l-full h-8 px-4 text-white border border-slate-500 focus:ring-1 focus:ring-blue-700 hidden sm:block outline-none"
              placeholder="Search"
            />
            <button className="bg-gray-700 h-8 sm:w-12 w-8 flex justify-center items-center rounded-full sm:rounded-l-none cursor-pointer hover:bg-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            </button>
            <button className="bg-gray-700 rounded-full h-8  w-8 p-1 flex justify-center items-center cursor-pointer mx-2  hover:bg-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm-40 280v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Z"/></svg>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <button className="flex justify-center bg-gray-700 h-7 items-center rounded-full p-1 mx-1 cursor-pointer  hover:bg-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            Create
            </button>
            <button className="mx-1 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
            </button>
            <div>
                <img src="Tulips.jpg" alt="" className="w-7 h-7 rounded-full mx-1 mr-3 cursor-pointer"/>
            </div>
        </div>
      </div>
    );
  };
  
  export default NavBar;
  