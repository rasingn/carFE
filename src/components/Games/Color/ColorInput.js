import React from 'react'

export default function ColorInput({onColorChange}) {
    function onTypingEvent(e){
        onColorChange(e.target.value);
    }
  return (
    <div className='mt-6'>
        <input onChange={onTypingEvent} type={'text'} className={"w-full rounded-lg border-skin-muted"} />
    </div>
  )
}
