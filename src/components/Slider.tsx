import React from 'react'
import Marquee from 'react-fast-marquee'

const Slider = () => {
  return (
    <div>
        <Marquee autoFill={true} speed={85}>
            <div className='px-4'>
                <p className='text-6xl text-white overflow-hidden py-10'>Summer Sale -20%</p>
            </div>
        </Marquee>
    </div>
  )
}

export default Slider