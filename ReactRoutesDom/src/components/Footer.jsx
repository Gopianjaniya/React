import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="relative mt-20 bg-gray-900 px-4 pt-20">
        <nav
          aria-label="Footer Navigation"
          class="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left"
        >
          <Link to="#" className="font-medium text-white  block py-2 pr-4 pl-3 duration-200 border-b   
lh:hover:bg-transparent lg:border-0
hover:text-orange-700 lg:p-0">
            Home
          </Link>
          <Link to="#" className="font-medium text-white  block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
lh:hover:bg-transparent lg:border-0
hover:text-orange-700 lg:p-0">
            About
          </Link>
          <Link to="#" className="font-medium text-white  block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
lh:hover:bg-transparent lg:border-0
hover:text-orange-700 lg:p-0">
            Support
          </Link>
          <Link to="#" className="font-medium text-white  block py-2 pr-4 pl-3 duration-200 border-b border-gray-100  
lh:hover:bg-transparent lg:border-0
hover:text-orange-700 lg:p-0">
            Terms & Conditions
          </Link>
        </nav>
        <p class="py-10 text-center text-gray-300">
          © 2022 Boleno | All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
