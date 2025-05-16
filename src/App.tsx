import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [value,setValue] = useState<string>("")
  const [info,setInfo] = useState<string>("")
  const [value2,setValue2] = useState<string>("")
  const [done,setDone] = useState<number>(0)
  const [done2,setDone2] = useState<number>(0)
  const onsubmit= (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const shit: string  = value.replace(/[^\d.-]/g,"")
    const fixed: number = shit?.includes(".") ? parseFloat(shit.substring(0, shit.indexOf(".") + 3)) : Math.round(parseFloat(shit) * 100)
    const quarters = Math.floor(fixed / 25);
    const remainingAfterQuarters = fixed % 25;
    const dimes = Math.floor(remainingAfterQuarters / 10);
    const remainingAfterDimes = remainingAfterQuarters % 10;
    const nickels = Math.floor(remainingAfterDimes / 5);
    const pennies = remainingAfterDimes % 5;
    setInfo(`${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies`);
    setDone(+fixed)
  }
  const onsubmit2 = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const shit : string  = value2.replace(/[^\d.-]/g, "")
    const fixed :string | number = shit ? parseFloat(shit) / 100 : 0
    setDone2(+fixed)
  }
  return (
    <>
      <div><h2>Tired of brainstorming? No worries mate! this app will do it for ya(usually correctly)</h2></div>
      <div>
        <form onSubmit={onsubmit}>
          <input type="text" onChange={({target}) => setValue(target.value)}/>
          <button>Converto de cents</button>
        </form>
      </div>
      <div>
        <h1>{done} Cents</h1>
        <h2>{info}</h2>
      </div>
      <div>
        <form onSubmit={onsubmit2}>
          <input type="text" onChange={({target}) => setValue2(target.value)} />
          <button>Converto de dollars</button>
        </form>
      </div>
      <div>
        <h1>{done2} Dollars</h1>
      </div>
    </>
  );
};

export default App;
