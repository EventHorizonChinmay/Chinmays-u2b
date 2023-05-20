import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'



const ChannelDetail = () => {
  const {id} = useParams()
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchResults = async () => {
      fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>{setChannelDetail(data?.items[0]) ;
      console.log('NOW',data?.items[0])} )
      fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data)=>setVideos(data?.items))
    }
    fetchResults()

  },[id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background:'linear-gradient(90deg,rgb(0,238,247) 0%, rgb(206,3,184) 100% ,rgb(0,212,255)100%', zIndex:10, height:'300px' }}/>
        <ChannelCard channelDetail={channelDetail} marginTop='-100px'/>
      </Box>

      <Box display='flex' p='2'>
        <Box sx={{mr: {sm:'100px'}}}>
        </Box>
        <Videos videos={videos}/>        
      </Box>
    </Box>
  )
}

export default ChannelDetail