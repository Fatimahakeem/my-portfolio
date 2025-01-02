import React from 'react'

function Button(props:{text:string}) {
  return (
    <button className=' mt-5 px-4 py-2 text-[#0E2C42] bg-[#EFBC75] hover:text-white rounded-xl'>
       <h3>{props.text}</h3>
    </button>
  )
}

export default Button