import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleBookmark = blog=>{
    setBookmarks([...bookmarks,blog])
  }

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='md:flex'>
          <Blogs handleBookmark={handleBookmark}></Blogs>
          <BookMarks bookmarks={bookmarks}></BookMarks>
        </div>
      </div>

    </>
  )
}

export default App
