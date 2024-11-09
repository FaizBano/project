import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='flex flex-col space-y-0'>
        <Image src='/one.jpg'
        width={250}
        height={100}
        alt='mainpic'
        />
        
    </div>
  )
}

export default About