import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<string>('home');

  const onChangePage = (value: string) => {
    setCurrentPage(value);
    navigate(`/${value === 'home' ? '' : value}`);
  }

  const [isActiveTogle, setIsActiveTogle] = useState(false);
  const [maxSmRightClass, setMaxSmRightClass] = useState("");
  const [top, setTop] = useState(true);

  const onClickToggle = () => {
    setIsActiveTogle(!isActiveTogle);
  };

  useEffect(() => {
    setMaxSmRightClass(
      isActiveTogle ? "max-sm:-right-0" : "max-sm:-right-full"
    );
  }, [isActiveTogle]);

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.pageYOffset <= 20);
    };
    window.addEventListener("scroll", scrollHandler);

    // Explicit call so that the navbar gets blurred when component mounts
    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    // <nav className="border-gray-200 sticky top-0">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-8">
    //     <a href="https://www.widetechnologies.co.id/" className="flex items-center space-x-3 rtl:space-x-reverse">
    //         <img src="/logo.svg" className="h-8" height={800} width={60} alt="Logo" />
    //         <span className="self-center text-2xl font-semibold whitespace-nowrap">Wide</span>
    //     </a>
    //     <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
    //         <span className="sr-only">Open main menu</span>
    //         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
    //         </svg>
    //     </button>
    //     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    //       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
    //         <li>
    //           <a onClick={() => onChangePage('home')} className={`block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${currentPage === 'home' && 'text-blue-700'}`}>Home</a>
    //         </li>
    //         <li>
    //           <a onClick={() => onChangePage('about')} className={`block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${currentPage === 'about' && 'text-blue-700'}`}>About</a>
    //         </li>
    //         <li>
    //           <a onClick={() => onChangePage('counter')} className={`block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${currentPage === 'counter' && 'text-blue-700'}`}>Counter</a>
    //         </li>
    //         <li>
    //           <a onClick={() => onChangePage('form')} className={`block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${currentPage === 'form' && 'text-blue-700'}`}>Form</a>
    //         </li>
    //         <li>
    //           <a onClick={() => onChangePage('api-integration')} className={`block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${currentPage === 'api-integration' && 'text-blue-700'} `}>Api Integration</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <header
    className={`flex gap-2 sm:justify-around px-10 sm:py-7 bg-transparent max-sm:h-16 sm:items-center w-screen fixed sm:right-0 sm:left-0 z-10 max-sm:justify-between ${
      !top && "bg-whitebg-opacity-80 backdrop-blur" }`}>
        <div className="max-sm:flex max-sm:items-center">
          <a href="https://www.widetechnologies.co.id/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.svg" className="h-8" height={800} width={60} alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Wide</span>
          </a>
        </div>
      <nav
        className={`sm:flex-1 flex max-sm:justify-center sm:justify-end sm:flex-row max-sm:fixed ${maxSmRightClass} max-sm:duration-100 max-sm:w-64 max-sm:z-20 max-sm:h-screen max-sm:bg-transparent max-sm:bg-white max-sm:bg-opacity-80 max-sm:backdrop-blur`}
      >
        <div
          className="sm:hidden absolute left-5 top-5 text-white cursor-pointer"
          onClick={onClickToggle}
        >
          <span className="material-icons font-black text-slate-950">close</span>
        </div>
        <ul className="flex sm:flex-row max-sm:flex-col sm:space-x-16 max-sm:space-y-10 max-sm:justify-center max-sm:items-center sm:justify-between font-medium text-lg max-sm:text-title sm:text-black lg:text-xl xl:text-lg md:text-sm sm:text-xs max-sm:text-xs">
          <li>
            <a onClick={() => onChangePage('home')} className={`py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${currentPage === 'home' && 'text-blue-700'}`}>Home</a>
          </li>
          <li>
            <a onClick={() => onChangePage('about')} className={`py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${currentPage === 'about' && 'text-blue-700'}`}>About</a>
          </li>
          <li>
            <a onClick={() => onChangePage('counter')} className={`py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${currentPage === 'counter' && 'text-blue-700'}`}>Counter</a>
          </li>
          <li>
            <a onClick={() => onChangePage('form')} className={`py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${currentPage === 'form' && 'text-blue-700'}`}>Form</a>
          </li>
          <li>
            <a onClick={() => onChangePage('api-integration')} className={`py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${currentPage === 'api-integration' && 'text-blue-700'} `}>list Data</a>
          </li>
        </ul>
      </nav>
      <div
        className="sm:hidden relative flex items-center"
        onClick={onClickToggle}
      >
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
