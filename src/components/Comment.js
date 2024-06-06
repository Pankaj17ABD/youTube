import React from 'react'

const Comment = ({data}) => {
    const{name,text,replies}=data
  return (
    <div className='flex-shadow-sm bg-gray-100 p-2 rounded-lg'>
<img 
 className='w-12 h-12'
 alt="user"
 src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
 />
<div className='px-3'>
    <p className='font-bold'>{name}</p>
    <p>{text}</p>
</div>

    </div>
  )
}

export default Comment