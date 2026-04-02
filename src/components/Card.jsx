import React from 'react'
import {MoveRight} from 'lucide-react'
function Card(props) {
  return (
    <>
    <div className=' w-1/4 min-w-65  relative '>
        <img className=' rounded-4xl h-full object-cover ' src={props.img} alt="photo" />
        <div className="text absolute rounded-4xl bg-black/50 top-0 left-0 h-full w-full p-8 flex flex-col justify-between ">
            <div className=''>
            <p className=' bg-white/80 size-10 text-xl  rounded-full flex items-center justify-center'>{props.id+1}</p>
            </div>
            <div className="article text-sm font-medium text-white flex flex-col gap-10  ">
                <p  className='p-4 text-md leading-7'>{props.intro}
                </p>
                <div className="btn flex gap-5 justify-between ">
                    <button className='bg-blue-800 px-5 py-2 rounded-3xl flex items-center align-baseline '>{props.tag}</button>
                    <span className='flex items-center  p-2 rounded-4xl bg-blue-800 '><MoveRight /> </span>
                </div>
            </div>
        </div>
    </div>
  
    </>
  )
}

export default Card