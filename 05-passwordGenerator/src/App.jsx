import { useState, useCallback, useEffect, useRef } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef();

  const generatePassword = useCallback(() => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    const pick = (s) => s[Math.floor(Math.random() * s.length)];

    let pool = letters;
    let pass = [pick(letters)];

    if (numberAllowed) {
      pool += numbers;
      pass.push(pick(numbers));
    }
    if (charAllowed) {
      pool += symbols;
      pass.push(pick(symbols));
    }

    while (pass.length < length) {
      pass.push(pick(pool));
    }

    pass.sort(() => Math.random() - 0.5);

    setPassword(pass.join(""));
    setCopied(false);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();

    setCopied(true);
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className={`cursor-pointer outline-none ease-in duration-100 text-white px-3 py-0.5 shrink-0 ${copied ? "bg-green-600 hover:bg-green-700" : "bg-blue-700 hover:bg-blue-800"}`}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer"
            name=""
            id="length"
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            name=""
            id="number"
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            name=""
            id="character"
          />
          <label htmlFor="character">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
