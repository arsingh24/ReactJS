import React from 'react'

function Jai({text,text2}) {
  return (
    <div className="w-full overflow-hidden bg-orange-600">
    <div className="flex space-x-4 justify-between animate-[marquee_10s_linear_infinite]">
      <span className="text-center font-bold text-xl py-5 ">
        Siya Ram Jai Ram Jai Jai Ram 
      </span>
      <span className="text-center font-bold text-xl py-5 ">
        {text}
      </span>
      <span className="text-center font-bold text-xl py-5 ">
        {text2}
      </span>
    </div>
  </div>
  )
}

export default Jai
