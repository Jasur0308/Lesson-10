import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Blog from './Blog'
import Posts from './blog-post/Posts'

const RouteController = () => {
  return (
    <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/post' element={<Posts/>}/>
    </Routes>
  )
}

export default RouteController