import React from 'react';
import Group from "../../data/Group.png"

const Footer = () => {  
  return (
    <div className='w-11/12 mx-auto p-4 flex flex-col items-center my-16 '>
        <img
            src = {Group}
            alt='Group'
            className = "w-[100%]"
        />
    </div>
  )
}

export default Footer