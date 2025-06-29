import { useState } from "react";

function App() {
  const [color, setColor] = useState("white"); 

  return (
    <>
      <div className={`w-full min-h-screen duration-200 bg-${color} flex justify-center items-center`}>
        <div className="  bg-white flex-wrap fixed bottom-12 p-4 m-3 rounded-lg shadow-xl flex items-center justify-center gap-10">
        <button 
          className="px-4  py-2 bg-red-500 text-white rounded shadow"
          onClick={() => setColor("red-500")}
        >
          Red
        </button>
        <button 
          className="px-4 py-2  bg-orange-500 text-white rounded shadow"
          onClick={() => setColor("orange-500")}
        >
          Orange
        </button>
        <button 
          className="px-4 py-2  bg-pink-500 text-white rounded shadow"
          onClick={() => setColor("pink-500")}
        >
          Pink
        </button>
        <button 
          className="px-4 py-2  bg-blue-500 text-white rounded shadow"
          onClick={() => setColor("blue-500")}
        >
          Blue
        </button>
        <button 
          className="px-4 py-2  bg-green-500 text-white rounded shadow"
          onClick={() => setColor("green-500")}
        >
          Green
        </button>
        <button 
          className="px-4 py-2  bg-white text-black rounded shadow"
          onClick={() => setColor("white")}
        >
          White
        </button>
        <button 
          className="px-4 py-2  bg-black text-white rounded shadow"
          onClick={() => setColor("black")}
        >
          Black
        </button>
        <button 
          className="px-4 py-2  bg-yellow-500 text-white rounded shadow"
          onClick={() => setColor("yellow-500")}
        >
          Yellow
        </button>
      </div>
      </div>
    </>
  );
}

export default App;
