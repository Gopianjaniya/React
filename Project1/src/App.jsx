import { useRef } from "react";
import { useEffect, useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passref = useRef(null);
  // generate password funtion -------------------
  const passGenerator = useCallback(() => {
    // useCallback ka use data memorize(yad) rakhata he
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";

    if (charAllowed) str += "!@#$%&*_+=-~`?";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // ================= copy password =================
  const copyPass = useCallback(() => {
    passref.current?.select();
    // passref.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenerator();
  }, [length, numberAllowed, charAllowed, passGenerator]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 
       bg-gray-800 p-10 text-white"
      >
        <h1 className="text-center text-white mb-4">Passworg Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-500">
          <input
            type="text"
            name=""
            id=""
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passref}
          />
          {/* Copy button =-=------=========== */}
          <button
            onClick={copyPass}
            className="outline-none bg-blue-700 hover:bg-blue-800  text-white p-3 py-0.5 "
          >
            Copy
          </button>
        </div>

        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={7}
              max={100}
              id="length"
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={numberAllowed}
              id="numberAllowed"
              className="cursor-pointer"
              onChange={(e) => {
                setNumberAllowed((pre) => !pre);
              }}
            />
            <label htmlFor="numberAllowed">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={charAllowed}
              id="charAllowed"
              className="cursor-pointer"
              onChange={(e) => {
                setCharAllowed((pre) => !pre);
                // setCharAllowed(e.target.checked);
              }}
            />
            <label htmlFor="charAllowed">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
