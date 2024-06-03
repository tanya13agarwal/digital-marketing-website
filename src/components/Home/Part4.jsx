import React, { useState } from 'react'
import image1 from "../../data/image1.png";
import image2 from "../../data/image2.png";
import image3 from "../../data/image3.png";

const Part4 = () => {
  
  const data = [
    {
      id : 1,
      img : image1,
      heading : `Genderless Kei – Japan’s Hot`,
      text : `Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of`,
    },
    {
      id : 2,
      img : image2,
      heading : `Better Strategy & Quality`,
      text : `Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of`,
    },
    {
      id : 3,
      img : image3,
      heading : `Genderless Kei – Japan’s Hot`,
      text : `Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of`,
    },
  ];

  const [currentCard , setCurrentCard] = useState(data[0].id);
  const [currentImg , setCurrentImg] = useState(data[0].img);

  const setMyCard = (curr) => {
    setCurrentCard(curr.id);
    setCurrentImg(curr.img);
  }

  const IMG = ({currentImgs}) => {
    return <img 
              src = {currentImgs} 
              className='w-[900px] h-[560px] rounded-lg'
              alt='view'
            />
  }

  return (
    <div className='W-11/12 mx-auto p-6 flex flex-col items-center my-16 gap-16'>
      <div className='flex flex-col items-center gap-8'>
        <div className='text-btnRed text-2xl font-semibold'>
            OUR PROJECT
        </div>

        <div className='text-4xl font-bold'>
            WHY WE ARE BEST
        </div>
      </div>
      <div className='flex w-full items-center'>
        <div className='mx-auto'>
                <IMG currentImgs = {currentImg}/>
        </div>
        <div className='flex w-[20%] flex-col mx-auto gap-2'>
        {
          data.map((card) => (
            <div key={card.id} className='flex mx-auto w-[100%]'>
              <div 
                className={`flex flex-col mx-auto cursor-pointerx p-3 bg-bgDull ${
                  currentCard === card.id ?
                  "bg-btnRed text-white" :
                  " "
                }`}
                onClick={() => setMyCard(card)}
                >
                <div className=''>
                  <div className='text-xl font-semibold my-3'>
                    {card.heading}
                  </div>
                  <div>
                    {card.text}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Part4