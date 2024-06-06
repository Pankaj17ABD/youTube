import React, { Suspense, useEffect, useState } from 'react'
import { GOOGLE_API_KEY, channelId } from '../Utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { Loading } from './Loading'

export const VedioContainer = () => {
  const [video, setVideo] = useState([])


  async function getData() {
    const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?&part=snippet,contentDetails,statistics,status&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`)
   
    // const data = await fetch(`https://www.googleapis.com/youtube/v3/search?&part=snippet,contentDetails,statistics,status&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`)
   
    const data2 = await data.json()
    setVideo(data2.items)

  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='flex flex-wrap'>

      {video.map((el) => 
      <Link key={el.id} to={"/watch?v=" + el.id}>
        <VideoCard info={el} />
        </Link>)}

    </div>
  )
}
