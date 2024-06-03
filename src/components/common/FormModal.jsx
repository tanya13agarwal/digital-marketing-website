import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaWindowClose } from "react-icons/fa";


const FormModal = ({setFormModal}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors , isSubmitSuccessful},
      } = useForm();
    
      useEffect(() => {
        if(isSubmitSuccessful) {
          reset({
            email: "",
            firstname: "",
            lastname: "",
            checkbox: "",
          })
        }
      },[reset , isSubmitSuccessful]);    

      const submitHandler = (data) => {
        console.log(data);
      }


    return (
        <div className='fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-grey bg-opacity-30 backdrop-blur-sm'>
            
            <div className='relative w-11/12 max-w-[400px] rounded-lg border border-btnRed bg-white p-8 flex flex-col gap-2'>
                
                <button
                    className='absolute right-3 top-3 text-btnRed text-2xl' 
                    onClick={() => setFormModal(false)}
                >
                    <FaWindowClose/>
                </button>

                <p className='text-2xl font-semibold text-richblack-5'>
                    Talk to us
                </p>

                <form action="https://getform.io/f/nadozwkb" method="POST">
                    {/* Email  */}
                    <div className='flex flex-col gap-2 mb-7 mt-4'>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Work email*'
                            className="border-b-[1px] border-greyDull outline-none"
                            {...register("email" , {required : true})}
                        />
                        {
                            errors.email && (
                                <span className='-mt-1 text-[12px] text-btnRed'>
                                    Please enter your email address*
                                </span>
                            )
                        }
                    </div>

                    {/* Name  */}
                    <div className='flex flex-col gap-5 lg:flex-row'>
                        {/* First Name */}
                        <div className='flex flex-col gap-2 mb-7 lg:w-[48%]'>
                            <input
                                type='text'
                                name='firstname'
                                id='firstname'
                                placeholder='First name*'
                                className="border-b-[1px] border-greyDull outline-none"
                                {...register("firstname" , {required : true})}
                            />
                            {
                                errors.firstname && (
                                    <span className='-mt-1 text-[12px] text-btnRed'>
                                    Please enter your first name*
                                    </span>
                                )
                            }
                        </div>
                        
                        {/* last Name */}
                        <div className='flex flex-col gap-2 mb-7 lg:w-[38%]'>
                            <input
                                type='text'
                                name='lastname'
                                id='lastname'
                                placeholder='Last name*'
                                className='border-b-[1px] border-greyDull outline-none'
                                {...register("lastname" , {required : true})}
                            />
                            {
                                errors.lastname && (
                                    <span className='-mt-1 text-[12px] text-btnRed'>
                                    Please enter your last name*
                                    </span>
                                )
                            }
                        </div>
                    </div>

                    <div className='flex items-center gap-4 mb-3'>
                        <input 
                            type="checkbox"
                            name='checkbox'
                            value="yes"
                            id='checkbox'
                            className='w-[26px] h-[26px] checked:accent-btnRed outline-btnRed'
                            {...register("checkbox" , {required : true})} 
                        />
                        <span className='text-xs text-greyDull'>
                            I agree to Fyle's terms and conditions, and provide consent to send me communication.
                        </span>
                    </div>
                        {
                            errors.checkbox && (
                                <span className='-mt-1 text-[12px] text-btnRed'>
                                Please accept the terms and conditions*
                                </span>
                            )
                        }

                    <button
                        type="submit"
                        className={` bg-btnRed hover:bg-white hover:border hover:text-btnRed hover:border-btnRed w-full p-3 cursor-pointer text-white rounded-lg hover:scale-95 transition-all duration-200`}
                    >
                        Contact Us
                    </button>
                
                </form>
                
            </div>
            
        </div>
  )
}

export default FormModal;