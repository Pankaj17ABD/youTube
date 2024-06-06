import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Redux/appSlice'
import { useSearchParams } from 'react-router-dom'
import { SEARCH_API } from '../Utils/constant'
import CommentContainer from './CommentContainer'

const WatchPage = () => {

    const[searchParams]=useSearchParams()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(closeMenu())
    },[])

 

  return (
    <div>
      <h1>ahskdjhakjdshk</h1>
    
        <iframe width="1200" 
        height="600" 
        src={"https://www.youtube.com/embed/"+searchParams.get('v')}
         title="YouTube video player" 
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
         allowFullScreen></iframe>
         <CommentContainer/>
    </div>
  )
}

export default WatchPage