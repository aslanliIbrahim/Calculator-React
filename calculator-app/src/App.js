import { useState } from "react";
import Background from "./ui/Background";

function App() {
  const [result, setResult] = useState("1234");

  return (
    <Background>
      <div className="shadow-inner shadow-2xl w-1/4 h-5/6 border border-separate border-sky-500 m-auto">
        <h1 className="text-center font-semibold text-4xl text-white">
          Calculator
        </h1>
        <div className="h-1/2 border border-separate flex flex-col justify-end items-end ">
          <input
            className="tracking-wider w-1/2 text-3xl outline-none text-right bg-transparent font-semibold"
            type="text"
            value={result}
            disabled
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button type="button" className="operator">
            C
          </button>
          <button type="button" className="operator">
            +/-
          </button>
          <button type="button" className="operator">
            %
          </button>
          <button type="button" className="operator">
            +
          </button>
          <button type="button" className="operator">
            1
          </button>
          <button type="button" className="operator">
            2
          </button>
          <button type="button" className="operator">
            3
          </button>
          <button type="button" className="operator">
            -
          </button>
          <button type="button" className="operator">
            4
          </button>
          <button type="button" className="operator">
            5
          </button>
          <button type="button" className="operator">
            6
          </button>
          <button type="button" className="operator">
            *
          </button>
          <button type="button" className="operator">
            7
          </button>
          <button type="button" className="operator">
            8
          </button>
          <button type="button" className="operator">
            9
          </button>
          <button type="button" className="operator">
            /
          </button>
          <button type="button" className="operator">
            0
          </button>
          <button type="button" className="operator">
            .
          </button>
          <button type="button" className="operator col-span-2">
            =
          </button>
          
        </div>
      </div>
    </Background>
  );
}

export default App;
