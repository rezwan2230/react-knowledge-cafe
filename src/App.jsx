import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const [readingTime, setReadingTime] = useState(0)
 
  const handleReadingTime = (id, time) => {
    setReadingTime(readingTime+time)
    const remainingBookmark = bookmarks.filter(bookmark=>bookmark.id!==id)
    setBookmarks(remainingBookmark)
  }


  const handleBookmark = blog => {
    setBookmarks([...bookmarks, blog])
  }

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='md:flex'>
          <Blogs handleBookmark={handleBookmark} 
          handleReadingTime={handleReadingTime}></Blogs>
          <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
        </div>
      </div>

    </>
  )
}

export default App
