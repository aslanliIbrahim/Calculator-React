import { useState } from "react";
import Background from "./ui/Background";

function App() {
  const [result, setResult] = useState("1234");

  const handleClick = (e) =>{
    setResult((prev)=>prev.concat(e.target.id))
  }
  const clearAll = () => setResult("")
  const deleteOne = () => setResult(result.slice(0, -1))
  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("ERROR")
    }
  }


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
        <div className="grid grid-cols-4  bg-gray_stone-very_ligt">
          <button onClick={clearAll} type="button" className="operator">
            C
          </button>
          <button onClick={deleteOne} type="button" className="operator">
            DE
          </button>
          <button
            onClick={handleClick}
            id="%"
            type="button"
            className="operator"
          >
            %
          </button>
          <button
            onClick={handleClick}
            id="+"
            type="button"
            className="operator"
          >
            +
          </button>
          <button
            onClick={handleClick}
            id="1"
            type="button"
            className="operator"
          >
            1
          </button>
          <button
            onClick={handleClick}
            id="2"
            type="button"
            className="operator"
          >
            2
          </button>
          <button
            onClick={handleClick}
            id="3"
            type="button"
            className="operator"
          >
            3
          </button>
          <button
            onClick={handleClick}
            id="-"
            type="button"
            className="operator"
          >
            -
          </button>
          <button
            onClick={handleClick}
            id="4"
            type="button"
            className="operator"
          >
            4
          </button>
          <button
            onClick={handleClick}
            id="5"
            type="button"
            className="operator"
          >
            5
          </button>
          <button
            onClick={handleClick}
            id="6"
            type="button"
            className="operator"
          >
            6
          </button>
          <button
            onClick={handleClick}
            id="*"
            type="button"
            className="operator"
          >
            *
          </button>
          <button
            onClick={handleClick}
            id="7"
            type="button"
            className="operator"
          >
            7
          </button>
          <button
            onClick={handleClick}
            id="8"
            type="button"
            className="operator"
          >
            8
          </button>
          <button
            onClick={handleClick}
            id="9"
            type="button"
            className="operator"
          >
            9
          </button>
          <button
            onClick={handleClick}
            id="/"
            type="button"
            className="operator"
          >
            /
          </button>
          <button
            onClick={handleClick}
            id="0"
            type="button"
            className="operator"
          >
            0
          </button>
          <button
            onClick={handleClick}
            id="."
            type="button"
            className="operator"
          >
            .
          </button>
          <button
            onClick={calculate}
            id="="
            type="button"
            className="operator col-span-2"
          >
            =
          </button>
        </div>
      </div>
    </Background>
  );
}

export default App;
