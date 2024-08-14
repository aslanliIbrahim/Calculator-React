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
      </div>
    </Background>
  );
}

export default App;
