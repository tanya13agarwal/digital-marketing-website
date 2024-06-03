import React from 'react';
import heart from "../../data/heart.png";
import clock from "../../data/clock.png";
import tick from "../../data/tick.png";
import trophy from "../../data/trophy.png";

const Part5 = () => {
    const data = [
        {
          id : 1,
          icon : heart,
          heading : "199 +",
          text : "Staticfied Customers",
        },
        
        {
          id : 2,
          icon : clock,
          heading : "1591 +",
          text : "Days Of Operation",
        },
        
        {
          id : 3,
          icon : tick,
          heading : "283 +",
          text : "Complete Project",
        },
        
        {
          id : 4,
          icon : trophy,
          heading : "75 +",
          text : "Win Awards",
        },
      ];

      return (
        <div className='W-11/12 mx-auto p-6 flex flex-col items-center my-16 gap-16'>
          
          <div className='flex flex-col items-center gap-8'>
            
            <div className='text-btnRed text-2xl font-semibold'>
              WHY CHOOSE US
            </div>
    
            <div className='text-4xl font-bold'>
                WHY WE ARE BEST
            </div>
          
          </div>
          
          <div className='flex items-center justify-center gap-16 p-4'>
            {
              data.map((card) => (
    
                <div 
                    key={card.id}
                    className={`bg-white group flex p-3 gap-4 flex-col items-center justify-center hover:shadow-2xl w-[290px]`}
                >
                    
                  <div className='flex flex-col items-center rounded-full'>
                    <img src={card?.icon} alt={card.id} className='w-[50px]'/>
                  </div>
                    
                  <div className='text-4xl my-3'>
                    {card.heading}
                  </div>
                    
                  <div className='text-xl flex items-center text-center justify-center'>
                    {card.text}
                  </div>
                  
                </div>
              ))
            }
          </div>
        </div>
      )
}

export default Part5