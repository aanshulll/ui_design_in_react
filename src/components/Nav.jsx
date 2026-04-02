import React from 'react'
import {MoveDownRightIcon} from 'lucide-react'
function Nav() {
  return (
    <div className='flex justify-between px-16 pt-8 items-center '>
        <div className="logo flex items-center text-xs/loose bg-black text-white p-5 rounded-4xl h-6 ">
            <p className=''>TARGET AUDIENCE</p>
        </div>
        <div className='flex gap-6 list-none text-xs'>
   <div className='flex gap-1 items-center'>
     <MoveDownRightIcon className='size-3' />
        <li><a href="#">DIGITAL</a></li>
   </div>
        <li><a href="#">BANKING</a></li>
        <li><a href="#">PLATFORM</a></li>
        </div>

    </div>
  )
}

export default Nav