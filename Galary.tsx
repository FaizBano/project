import React from 'react'
import Image from 'next/image'

const Galary = () => {
  return (
    <div id='galary'>
        <div>
        <Image src="/galary.jpg"
        width="150"
        height="100"
        alt='image2'
        />
    
        </div>
    </div>
  )
}

export default Galary