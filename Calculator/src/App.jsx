import { useState } from "react";
import "./App.css";

function App() {
  
  const [inputVal,setInputVal]=useState("");
  
  function calculate(value) {
    switch (value) {
      case "1":
       setInputVal(inputVal+value);       
        break;
      case "2":
       setInputVal(inputVal+value);
        break;
      case "3":
       setInputVal(inputVal+value);
        break;
      case "4":
       setInputVal(inputVal+value);
        break;
      case "5":
       setInputVal(inputVal+value);
        break;
      case "6":
       setInputVal(inputVal+value);
        break;
      case "7":
       setInputVal(inputVal+value);
        break;
      case "8":
       setInputVal(inputVal+value);
        break;
      case "9":
       setInputVal(inputVal+value);
        break;
      case "00":
       setInputVal(inputVal+value);
        break;
      case "0":
       setInputVal(inputVal+value);
        break;
      case "+":
       setInputVal(inputVal+value);
        break;
      case "-":
       setInputVal(inputVal+value);
        break;
      case "/":
       setInputVal(inputVal+value);
        break;
      case "%":
       setInputVal(inputVal+value);
        break;
      case ".":
       setInputVal(inputVal+value);
        break;
      case "AC":
        setInputVal("");
        break;
      case "C":
        setInputVal(inputVal.slice(0,-1));
        break;
      case "*":
       setInputVal(inputVal+value);
        break;
      case "=":
      try {
        setInputVal(eval(inputVal));
      } catch {
        // setInputVal("Error");
         setInputVal("");
      }  
        break;

     
    }
  }

  return (
    <>
      <div className="h-screen w-screen  grid place-items-center">
        <div className="w-100 h-125 bg-black shadow-sm shadow-yellow-500  rounded-t-3xl rounded-b-3xl">
          <input
            className="h-20 w-full  bg-amber-50 text-black text-2xl rounded-t-3xl"
            type="text"
            value={inputVal}
            readOnly
          />
          {/* first 4-rows button  */}
          <div className=" w-full h-100  grid grid-cols-4 pl-5 pt-7">
            <button className="w-15 h-15" onClick={() => calculate("AC")}>
              AC
            </button>
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("%")}
            >
              %
            </button>
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("C")}
            >
              C
            </button>
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("/")}
            >
              /
            </button>
            {/* secord 4-rows button */}
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("7")}
            >
              7
            </button>
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("8")}
            >
              8
            </button>
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("9")}
            >
              9
            </button>
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("*")}
            >
              *
            </button>
            {/* third 4-rows button */}
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("4")}
            >
              4
            </button>
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("5")}
            >
              5
            </button>
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("6")}
            >
              6
            </button>
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("-")}
            >
              -
            </button>
            {/* fourth 4-rows button */}
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("1")}
            >
              1
            </button>
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("2")}
            >
              2
            </button>
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("3")}
            >
              3
            </button>
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("+")}
            >
              +
            </button>
            {/* fifth 4-rows btn */}
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("00")}
            >
              00
            </button>
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate("0")}
            >
              0
            </button>
            <button
              className="w-15 h-15 rounded-xs"
              onClick={() => calculate(".")}
            >
              .
            </button>
            <button
              onClick={() => calculate("=")}
              className="w-15 h-15 rounded-xs  bg-red-800 hover:text-green-700  text-red-700 text-3xl"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
