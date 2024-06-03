import React from 'react'
import Part1 from '../components/Home/Part1'
import Part2 from '../components/Home/Part2'
import Part3 from '../components/Home/Part3'
import Part4 from '../components/Home/Part4'
import Part5 from '../components/Home/Part5'
import Part6 from '../components/Home/Part6'
import Footer from '../components/common/Footer'

const Home = () => {
  return (
    <div className='flex flex-col'>
        
        {/* Part 1 */}
        <div className='bg-white'>
          <Part1/>
        </div>

        {/* Part 2 */}
        <div className='bg-bgDull'>
          <Part2/>
        </div>
        
        {/* Part 3 */}
        <div className='bg-white'>
          <Part3/>
        </div>

        {/* Part 4 */}
        <div className='bg-white'>
          <Part4/>
        </div>

        {/* Part 5 */}
        <div className='bg-bgDull'>
          <Part5/>
        </div>

        {/* Part 6 */}
        <div className='bg-white'>
          <Part6/>
        </div>
        
        <div className='bg-btnRed'>
          <Footer/>
        </div>
    </div>
  )
}

export default Home