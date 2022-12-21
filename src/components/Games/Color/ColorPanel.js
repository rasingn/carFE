import React, { useState } from 'react'
import ColorInput from './ColorInput'

export default function ColorPanel() {
  const [color,setColor]=useState('');
function onColorChange(newColor){
  setColor(newColor)
}
  
  return (
   <div className='flex justify-center'>
    <div>
     <div className={'w-64 h-64  border border-skin-muted'} style={{backgroundColor:color}} ></div>
     <ColorInput onColorChange={onColorChange}/>
    </div>
   </div>
  )
}
