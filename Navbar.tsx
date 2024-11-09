import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='container pt-32'>
        <div className='flex justify-end items-end'>
        <div className='text-xl font-medium'> 
         
        </div>
               
          <div className='flex mt-0  '>
    <ul className='flex flex-1 gap-3 ml-2 mt-0'>
      <li><Link href='#hero'>Main</Link></li>
      <li><Link href='#galary'>Galary</Link></li>
      <li><Link href='#projects'>Projects</Link></li>
      <li><Link href='#certificate'>Certificate</Link></li>
      <li><Link href='#contact'>Contacts</Link></li>
 
    </ul>
    </div>

    </div>  
    </div> 
       
  )
}

export default Navbar

