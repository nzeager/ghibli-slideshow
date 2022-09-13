import './App.css'
import {useState} from 'react'
import { filmData } from './film-data'

function App() {
  const [filmIndex, setFilmIndex] = useState(0)

  // length of filmData
  const len = filmData.length

  return (
    <div className="slides-app">
      <FilmDetail filmObj={filmData[filmIndex]} filmIndex={filmIndex} setFilmIndex={setFilmIndex} len={len} />
    </div>
  )
}

const FilmDetail = ({ filmObj, filmIndex, setFilmIndex, len }) => {
  return (
    <>
      <div className='title'> {filmObj.title } </div>
      <div className='info'>
        <div className='image-info'><img src={filmObj.image } alt={filmObj.title}></img></div>
        <div className='written-info'>
          <div className='original-title'> {filmObj.original_title } </div>
          <div className='release'> {filmObj.release_date } </div>
          <div className='description'> {filmObj.description } </div>
        </div>
      </div>
      <div className='buttons'>
        <button
          onClick={() => {
            setFilmIndex(0)
          }}
          disabled={filmIndex===0}
        > Start Over </button>
        <button
          onClick={() => {
            setFilmIndex(filmIndex-1)
          
          }}
          disabled={filmIndex===0}
        > Back </button>
        <button
          onClick={() => {
            setFilmIndex(filmIndex+1)
          }}
          disabled={filmIndex===len-1}
        > Next </button>
      </div>
    </>
  )
}


export default App
