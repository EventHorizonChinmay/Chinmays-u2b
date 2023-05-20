import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box, box} from '@mui/material' 
// import { Feed } from '@mui/icons-material'
// import VideoDetail from './components/VideoDetail'
// import ChannelDetail from './components/ChannelDetail'
// import SearchFeed from './components/SearchFeed'
// import Navbar from './components/Navbar'
import { Navbar, Feed, SearchFeed, VideoDetail, ChannelDetail } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
      
        <Route path='/' exact element={<Feed/>} />
        <Route path='/video/:id' element={<VideoDetail />}/>
        <Route path='/channel/:id' element={<ChannelDetail />}/>
        <Route path='/search/:searchTerm' element={<SearchFeed />}/>
      </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App