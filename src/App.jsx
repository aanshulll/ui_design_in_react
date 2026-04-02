import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Section1 from './components/Section1'

function App() {
  const usr = [{
    img: 'https://i.pinimg.com/736x/7a/e0/72/7ae07275b5bcb595ec5da30eb436b639.jpg',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iste deserunt. Expedita cum inventore, quam non corporis modi facilis eveniet nostrum pariatur. Minus, iure?',
    tag: 'Satisfied'
  },
{
    img: 'https://i.pinimg.com/736x/99/ff/28/99ff28218b7cfabc42e4ddf131cfbc9a.jpg',
    intro:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis sed nostrum nemo saepe reiciendis minus tenetur officia itaque consequuntur soluta suscipit cupiditate delectus, quas quisquam necessitatibus aliquid eum?',
    tag: 'Underbaned'
    
  },
{
    img: 'https://i.pinimg.com/1200x/ff/9a/8f/ff9a8fdbf411018e730072ecb1a253cc.jpg',
    intro: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt recusandae quod ratione ipsa molestiae est, non culpa illo error deserunt soluta dolores earum alias nobis maiores illum magni quaerat obcaecati!',
        tag: 'Underserved'

  },
  {
    img: 'https://i.pinimg.com/736x/82/15/6e/82156efb97036511e62c4e3156e823da.jpg',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit vitae soluta blanditiis assumenda dolor, aspernatur suscipit eligendi, amet consectetur aliquam nihil adipisci corporis doloribus, iure ducimus ea. Reprehenderit dignissimos temporibus provident atque accusantium.',
    tag: 'Satisfied'

  }

  
]

  return (

    <div>
      <Nav />
      <Section1 user={usr} />
    </div>
  )
}

export default App
