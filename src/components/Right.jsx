import React from 'react'
import { MoveUpRight } from 'lucide-react'
function Right() {
    return (
        <div className='flex justify-between w-1/4 flex-col gap-6 py-20 px-8 text-start '>
            <div className="text flex flex-col gap-6">

          
            <h1 className='text-5xl font-bold w-full leading-tight tracking-tighter'>
                Prospective <br />
                <span className='bg-zinc-100 px-3 rounded-full'>customer</span> <br />
                segmentation
            </h1>

            <article className=' text-sm text-black/50 '>
                Depending on customer
                satisfaction and access
                to banking products, potential
                target audience can be divided
                into three groups.
            </article>
              </div>
            <div className=''>
                <MoveUpRight className='size-10' />
            </div>
        </div>
    )
}

export default Right