import { useCallback, useState } from "react";

function App() {
  const [length,setLength]=useState(8);
  const [numbersallowed,setNumbersallowed]=useState(false);
   const [charAllowed,setCharAllowed]=useState(false)
   const [password,setPassword]=useState('')

   const passwordGenerator=useCallback(fn,[])
  return (
   <h1 className='bg-red-500'>Hello</h1>
  );
}

export default App;
