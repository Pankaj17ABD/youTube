import React from 'react'
import Buttons from './Buttons'

export const ButtonList = () => {
  let arr=["MUSIC","KOMEDY","GAMING","SONGS","LIVE"]
  return (
    <div className='flex'>
      {arr.map((item)=><Buttons name={item}/>)}
      {/* <Buttons name="MUSIC"/><Buttons name="GAMING"/>
    <Buttons name="KOMEDY"/><Buttons name="SONGS"/><Buttons name="LIVE"/> */}
    </div>
  )
}
