import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(3);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [copied, setCopied] = useState(false); // State to track copy status

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) str += "0123456789";
    if (includeSymbols) str += "!@#$%^&*()_+[]{}|;:,.<>?";
    console.log("str is: ", str);
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str[index];
    }

    setPassword(pass);
  }, [length, includeNumbers, includeSymbols]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // Reset after 1.5 seconds
    });
  };

  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3"> Password Generator </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-gray-800"
            placeholder="Password"
            readOnly
          />
          <button className="bg-amber-200 text-black px-4 cursor-pointer  hover:scale-120 transition-transform duration-300 ease-in-out"
          onClick={copyToClipboard}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={3}
              max={25}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeNumbers}
              id="numberInput"
              onChange={() => {
                setIncludeNumbers((prev) => !prev);
              }}
            />
            <label>Include Numbers: {includeNumbers}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeSymbols}
              id="symbolInput"
              onChange={() => {
                setIncludeSymbols((prev) => !prev);
              }}
            />
            <label>Include Symbols: {includeSymbols}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
