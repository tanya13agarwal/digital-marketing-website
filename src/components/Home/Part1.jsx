import React, { useState } from 'react';
import hero from "../../data/hero.png";
import FormModal from '../common/FormModal';


const Part1 = () => {

    const [formModal , setFormModal] = useState(false);

  return (
    <div className='w-11/12 mx-auto mt-16 mb-16 p-6 flex items-center gap-16 justify-between'>
        <div className='flex flex-col gap-8 w-[40%]'>
            <div className='text-btnRed text-2xl font-semibold'>
                AWARD WINNING
            </div>
            
            <div className='text-5xl font-bold'>
                DIGITAL MARKETING AGENCY
            </div>
            
            <p className='text-lg mt-4'>
                Morbi sed lacus nec risus finibus feugiat et fermentum nibh. 
                Pellentesque vitae ante at elit fringilla ac at purus, 
                Morbi sed lacus nec risus finibus feugiat et fermentum
            </p>

            <button
                onClick={() => setFormModal(true)}
                className={` bg-btnRed hover:bg-white hover:border hover:text-btnRed hover:border-btnRed w-[30%] p-3 cursor-pointer text-white rounded-lg hover:scale-95 transition-all duration-200`}
            >
                CONTACT US
            </button>
        </div>
        <div className=''>
            <img 
            src = {hero}
            alt='hero'
            className='h-[600px] w-[500px]'
            />
        </div>
        {
            formModal && <FormModal setFormModal = {setFormModal}/>
        }
    </div>
  )
}

export default Part1