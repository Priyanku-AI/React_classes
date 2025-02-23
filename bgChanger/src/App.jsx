import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
    <h1 className="absolute bottom-30 left-1/2 transform -translate-x-1/2 text-center text-4xl font-bold text-white pt-10">Change Backgorund Color</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
  className="outline-none px-6 py-2 rounded-full text-white shadow-lg cursor-pointer 
             hover:scale-110 transition-transform duration-300 ease-in-out
             bg-gradient-to-r from-red-500 to-red-700 
             hover:shadow-red-500/50 active:scale-95"
  onClick={() => setColor("red")}
>
  Red
</button>

<button
  className="outline-none px-6 py-2 rounded-full text-white shadow-lg cursor-pointer 
             hover:scale-110 transition-transform duration-300 ease-in-out
             bg-gradient-to-r from-green-500 to-green-700 
             hover:shadow-green-500/50 active:scale-95"
  onClick={() => setColor("green")}
>
  Green
</button>

<button
  className="outline-none px-6 py-2 rounded-full text-white shadow-lg cursor-pointer 
             hover:scale-110 transition-transform duration-300 ease-in-out
             bg-gradient-to-r from-blue-500 to-blue-700 
             hover:shadow-blue-500/50 active:scale-95"
  onClick={() => setColor("blue")}
>
  Blue
</button>

<button
  className="outline-none px-6 py-2 rounded-full text-white shadow-lg cursor-pointer 
             hover:scale-110 transition-transform duration-300 ease-in-out
             bg-gradient-to-r from-purple-500 to-purple-700 
             hover:shadow-purple-500/50 active:scale-95"
  onClick={() => setColor("purple")}
>
  Purple
</button>

<button
  className="outline-none px-6 py-2 rounded-full text-black shadow-lg cursor-pointer 
             hover:scale-110 transition-transform duration-300 ease-in-out
             bg-gradient-to-r from-yellow-400 to-yellow-600 
             hover:shadow-yellow-400/50 active:scale-95"
  onClick={() => setColor("yellow")}
>
  Yellow
</button>

<button
  className="outline-none px-6 py-2 rounded-full text-white shadow-lg cursor-pointer 
             hover:scale-110 transition-transform duration-300 ease-in-out
             bg-gradient-to-r from-pink-500 to-pink-700 
             hover:shadow-pink-500/50 active:scale-95"
  onClick={() => setColor("pink")}
>
  Pink
</button>

<button
  className="outline-none px-6 py-2 rounded-full text-white shadow-lg cursor-pointer 
             hover:scale-110 transition-transform duration-300 ease-in-out
             bg-gradient-to-r from-orange-500 to-orange-700 
             hover:shadow-orange-500/50 active:scale-95"
  onClick={() => setColor("orange")}
>
  Orange
</button>

<button
  className="outline-none px-6 py-2 rounded-full text-white shadow-lg cursor-pointer 
             hover:scale-110 transition-transform duration-300 ease-in-out
             bg-gradient-to-r from-teal-500 to-teal-700 
             hover:shadow-teal-500/50 active:scale-95"
  onClick={() => setColor("teal")}
>
  Teal
</button>


        </div>
      </div>
    </div>
  );
}

export default App;
