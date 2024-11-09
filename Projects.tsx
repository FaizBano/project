import React from 'react'
import Image from 'next/image'
const Projects = () => {
  return (
    <div id='projects'>
        
        <Image src = "/four.jpg"
        width = {200}
        height = {100}
        alt ="projects"
        />
         <Image src = "/image3.jpg"
        width = {200}
        height = {100}
        alt ="projects"
        />
    </div>
    
  )
}

export default Projects