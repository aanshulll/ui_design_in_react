import React from 'react'
import Card from './Card'

function Left(props) {
let data = props.user
  return (
    <div className=' p-10 gap-6 overflow-x-scroll w-full flex '>
      {data.map((val, idx)=>
{
    return <Card key={idx} id={idx} img={val.img} tag={val.tag} intro={val.intro} />
})}
    </div>
  )
}

export default Left