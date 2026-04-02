import React from 'react'
import Left from './Left'
import Right from './right'

function Section1(props) {
  return (
    <div className='flex gap-6 p-8 h-screen  w-4/4'>
        <Right />
        <Left user={props.user} />
    </div>
  ) 
}

export default Section1