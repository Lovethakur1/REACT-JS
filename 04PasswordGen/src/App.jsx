import { useState, useCallback, useEffect , useRef } from "react";

function App() {
  const [length, setLength] = useState(0);
  const [charAllow, setCharAllow] = useState(false);
  const [numberAllow, setNumberAllow] = useState(false);
  const [password, setPassword] = useState("");

  // useRef 
  const passWordRef = useRef(null)

  const passWordGen = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    setPassword(pass);
  }, [length, charAllow, numberAllow, setPassword]);


  const copyPass = useCallback(() => {
    passWordRef.current?.select()
    passWordRef.current?.setSelectionRange(0,20)

    window.navigator.clipboard.writeText(password)},[password])

  useEffect(()=>{passWordGen()},[length,charAllow,numberAllow, passWordGen])
 
 
 
  return (
    <div className="bg-black w-full h-screen">
      <h1 className=" p-3 text-4xl text-center text-white">Password Gen </h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-2xl text-center mb-3">Password Gen</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="PASSWORD"
            readOnly
            className="outline-none w-full px-3 py-1"
            ref = {passWordRef}
          />
          <button className="p outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700" onClick={copyPass} >
            COPY
          </button>
        </div>
        <div className=" flex text-sm gap-x-1">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={18}
              value={length}
              className=" cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}
            /><label>Length :- {length} </label>
          </div>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllow}
            onChange={(e) => setCharAllow((prev)=>!prev)}

          />
          <label>Character</label>
          
          </div>
          <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numberAllow}
            onChange={(e) => setNumberAllow((prev)=>!prev)}

          />
          <label>Number</label>
          
          </div>
      </div>
    </div>
  );
}

export default App;
