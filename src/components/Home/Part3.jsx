import React from 'react';
import icon1 from "../../data/1.png";
import icon2 from "../../data/2.png";
import icon3 from "../../data/3.png";
import icon4 from "../../data/4.png";


const Part3 = () => {
  const data = [
    {
      id : 1,
      icon : icon1,
      heading : "Clarified Vision & Target",
      text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
    },
    
    {
      id : 2,
      icon : icon2,
      heading : "High Performance",
      text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
    },
    
    {
      id : 3,
      icon : icon3,
      heading : "Maintain Security",
      text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
    },
    
    {
      id : 4,
      icon : icon4,
      heading : "Better Strategy & Quality",
      text : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
    },
  ]
  return (
    <div className='W-11/12 mx-auto p-6 flex flex-col items-center mt-16 gap-16'>
      
      <div className='flex flex-col items-center gap-8'>
        
        <div className='text-btnRed text-2xl font-semibold'>
          WHY CHOOSE US
        </div>

        <div className='text-4xl font-bold'>
            WHY WE ARE BEST
        </div>
      
      </div>
      
      <div className='flex gap-4 w-[95%] p-4'>
        {
          data.map((card) => (

            <div
              key={card.id} 
              className='bg-bgDull flex p-2 flex-col items-center justify-center'
            >
                
              <div className='flex flex-col items-center'>
                <img src={card?.icon} alt={card.id} className='w-[50px]'/>
              </div>
                
              <div className='text-xl font-semibold my-3'>
                {card.heading}
              </div>
                
              <div className='text-md flex items-center text-center justify-center'>
                {card.text}
              </div>
              
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Part3