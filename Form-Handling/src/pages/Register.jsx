import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Register() {
  const baseUrl = "https://api.freeapi.app/api/v1";
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [error, setError] = useState("");
  let [isLoading, setIsLoading] = useState(false);


  const data = {
    email: email,
    password: password,
    username: userName,
    role: "USER",
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      if (userName == "" || password == "" || email == "") {
        setError("Invalid Data Entered By You");
        return;
      }

      console.log(data,"<===");

      const res = await fetch(`${baseUrl}/users/register`, {
            method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      

      if (res.status == 201) {
        let response = await res.json();

        toast(`${response?.message}`);
        console.log("response.data", response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="w-screen h-screen grid place-content-center bg-white">
        <div className="flex flex-col items-center gap-4">
          {/* Dots Loader */}
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.6s]"></div>
          </div>

          {/* Loading Text */}
          <h1 className="text-lg font-semibold text-gray-700">Loading...</h1>
        </div>
      </div>
    );
  }


  return (
    <div className="grid place-content-center h-auto p-11 ">
      <ToastContainer />
      <form
        onSubmit={handleRegister}
        className="bg-green-400 p-4 rounded-lg grid gap-3"
      >
        <div>
          <h4 className="text-center font-bold text-2xl">Register</h4>
        </div>
        <p className="text-red text-xl text-center">{error}</p>
        <div className="">
          <input
            className="border-black rounded-sm p-2 bg-amber-50 w-[210px]"
            placeholder="@username"
            type="text"
            name="username"
            id="username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="">
          <input
            className="border-black rounded-sm p-2 bg-amber-50 w-[210px]"
            placeholder="example@domain.com"
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="">
          <input
            className="border-black rounded-sm p-2 bg-amber-50 w-[210px]"
            placeholder="password"
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="">
          {/* isLoader ? loaderUi : btn */}
          <button className="border-black rounded-sm p-2 bg-amber-400 w-[210px] font-bold cursor-pointer hover:">
            Sing-up
          </button>
        </div>
      </form>
    </div>
  );
}


 