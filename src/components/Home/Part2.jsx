import React from 'react';
import { FaLaptopCode } from "react-icons/fa";
import {Link} from "react-router-dom"


import img1 from "../../data/images/1.png";
import img2 from "../../data/images/2.png";
import img3 from "../../data/images/3.png";
import img4 from "../../data/images/4.jpeg";
import img5 from "../../data/images/sample.jpeg";
import img6 from "../../data/images/sample2.jpeg";


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Part2 = () => {
  return (
    <div className='w-11/12 mx-auto p-6 flex flex-col  gap-8 mt-16 '>
        
        <div className='text-btnRed text-2xl font-semibold'>
            WHAT WE DO
        </div>
        
        <div className='flex items-center justify-between w-full'>
            
            <div className='text-4xl font-bold '>
                SERVICES PROVIDE FOR YOU
            </div>
            
            <div className='text-md mt-4 w-[40%] '>
                Morbi sed lacus nec risus finibus feugiat et fermentum nibh. 
                Pellentesque vitae ante at elit fringilla ac at purus, 
                Morbi sed lacus nec risus finibus feugiat et fermentum
            </div>
        
        </div>

        {/* SLIDER */}

        <OwlCarousel className='owl-theme' loop margin={20} autoplay autoplayHoverPause autoplayTimeout={1000}>
            <div className='item '>
                <div className='relative group flex flex-col items-center justify-center '>
                    <img className='image group-hover:hidden' src={img1} alt=''/>
                    <div className='group-hover:block hidden gropu-hover:w-full gropu-hover:h-full '>
                        <div className='absolute top-0 left-0 text-white flex items-center text-center justify-center  
                            bg-btnRed w-[410px] h-[525px] flex-col  gap-8 p-8 rounded-lg '
                        >
                            <div className='text-[80px] text-white'>
                                <FaLaptopCode />
                            </div>
                            <div className='text-2xl font-medium'>
                                WEB DEVELOPMENT
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis, velit doloremque labore eaque 
                                nobis sapiente aperiam error officia
                            </p>

                            <Link target='_blank' to={"https://www.fylehq.com"} className='w-full'>
                                <button
                                    className={` bg-white w-[50%] p-3 cursor-pointer text-btnRed rounded-lg hover:scale-95 transition-all duration-200`}
                                >
                                    Read More --&gt;
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative group flex flex-col items-center justify-center '>
                <img className='image group-hover:hidden' src={img2} alt=''/>
                <div className='group-hover:block hidden gropu-hover:w-full gropu-hover:h-full '>
                        <div className='absolute top-0 left-0 text-white flex items-center text-center justify-center  
                            bg-btnRed w-[410px] h-[525px] flex-col  gap-8 p-8 rounded-lg '
                        >
                            <div className='text-[80px] text-white'>
                                <FaLaptopCode />
                            </div>
                            <div className='text-2xl font-medium'>
                                WEB DEVELOPMENT
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis, velit doloremque labore eaque 
                                nobis sapiente aperiam error officia
                            </p>

                            <Link target='_blank' to={"https://www.fylehq.com"} className='w-full'>
                                <button
                                    className={` bg-white w-[50%] p-3 cursor-pointer text-btnRed rounded-lg hover:scale-95 transition-all duration-200`}
                                >
                                    Read More --&gt;
                                </button>
                            </Link>
                        </div>
                    </div>
            </div>
            <div className='relative group flex flex-col items-center justify-center '>
                <img className='image group-hover:hidden' src={img3} alt=''/>
                <div className='group-hover:block hidden gropu-hover:w-full gropu-hover:h-full '>
                        <div className='absolute top-0 left-0 text-white flex items-center text-center justify-center  
                            bg-btnRed w-[410px] h-[525px] flex-col  gap-8 p-8 rounded-lg '
                        >
                            <div className='text-[80px] text-white'>
                                <FaLaptopCode />
                            </div>
                            <div className='text-2xl font-medium'>
                                WEB DEVELOPMENT
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis, velit doloremque labore eaque 
                                nobis sapiente aperiam error officia
                            </p>

                            <Link target='_blank' to={"https://www.fylehq.com"} className='w-full'>
                                <button
                                    className={` bg-white w-[50%] p-3 cursor-pointer text-btnRed rounded-lg hover:scale-95 transition-all duration-200`}
                                >
                                    Read More --&gt;
                                </button>
                            </Link>
                        </div>
                    </div>
            </div>
            <div className='relative group flex flex-col items-center justify-center '>
                <img className='image group-hover:hidden' src={img4} alt=''/>
                <div className='group-hover:block hidden gropu-hover:w-full gropu-hover:h-full '>
                        <div className='absolute top-0 left-0 text-white flex items-center text-center justify-center  
                            bg-btnRed w-[410px] h-[525px] flex-col  gap-8 p-8 rounded-lg '
                        >
                            <div className='text-[80px] text-white'>
                                <FaLaptopCode />
                            </div>
                            <div className='text-2xl font-medium'>
                                WEB DEVELOPMENT
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis, velit doloremque labore eaque 
                                nobis sapiente aperiam error officia
                            </p>

                            <Link target='_blank' to={"https://www.fylehq.com"} className='w-full'>
                                <button
                                    className={` bg-white w-[50%] p-3 cursor-pointer text-btnRed rounded-lg hover:scale-95 transition-all duration-200`}
                                >
                                    Read More --&gt;
                                </button>
                            </Link>
                        </div>
                    </div>
            </div>
            <div className='relative group flex flex-col items-center justify-center '>
                <img className='image group-hover:hidden' src={img5}/>
                <div className='group-hover:block hidden gropu-hover:w-full gropu-hover:h-full '>
                        <div className='absolute top-0 left-0 text-white flex items-center text-center justify-center  
                            bg-btnRed w-[410px] h-[525px] flex-col  gap-8 p-8 rounded-lg '
                        >
                            <div className='text-[80px] text-white'>
                                <FaLaptopCode />
                            </div>
                            <div className='text-2xl font-medium'>
                                WEB DEVELOPMENT
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis, velit doloremque labore eaque 
                                nobis sapiente aperiam error officia
                            </p>

                            <Link target='_blank' to={"https://www.fylehq.com"} className='w-full'>
                                <button
                                    className={` bg-white w-[50%] p-3 cursor-pointer text-btnRed rounded-lg hover:scale-95 transition-all duration-200`}
                                >
                                    Read More --&gt;
                                </button>
                            </Link>
                        </div>
                    </div>
            </div>
            <div className='iterelative group flex flex-col items-center justify-center m'>
                <img className='image group-hover:hidden' src={img6}/>
                <div className='group-hover:block hidden gropu-hover:w-full gropu-hover:h-full '>
                        <div className='absolute top-0 left-0 text-white flex items-center text-center justify-center  
                            bg-btnRed w-[410px] h-[525px] flex-col  gap-8 p-8 rounded-lg '
                        >
                            <div className='text-[80px] text-white'>
                                <FaLaptopCode />
                            </div>
                            <div className='text-2xl font-medium'>
                                WEB DEVELOPMENT
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis, velit doloremque labore eaque 
                                nobis sapiente aperiam error officia
                            </p>
                            
                            <Link target='_blank' to={"https://www.fylehq.com"} className='w-full'>
                                <button
                                    className={` bg-white w-[50%] p-3 cursor-pointer text-btnRed rounded-lg hover:scale-95 transition-all duration-200`}
                                >
                                    Read More --&gt;
                                </button>
                            </Link>
                        </div>
                    </div>
            </div>
        </OwlCarousel>

    </div>
  )
}

export default Part2