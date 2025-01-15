import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    setCount((prev) => (prev += 1));
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div className="App h-full flex justify-center items-center">
      <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg flex flex-col shadow w-1/2 h-3/4">
        <div className='flex justify-center items-center text-8xl' style={{ flex: 11 }}>{count}</div>
        <div className="flex mt-2 gap-2" style={{ flex: 1 }}>
          <button type="button" onClick={decrement} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full">Decrement</button>
          <button type="button" onClick={increment} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full">Increment</button>
        </div>
      </div>
    </div>
  );
}

export default Counter
