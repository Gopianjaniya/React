import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="px-12 h-[65px] bg-white shadow-md flex items-center justify-between">
      <div>
        <h4
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer text-black font-bold text-3xl"
        >
          Logo
        </h4>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="cursor-pointer px-5 py-2 bg-blue-600 rounded-xl text-white font-medium"
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/register");
          }}
          className="cursor-pointer px-5 py-2 bg-blue-600 rounded-xl text-white font-medium"
        >
          SingUp
        </button>
      </div>
    </div>
  );
}
