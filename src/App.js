import './materialize.css'
import './App.css'
import {useState} from 'react'
import { filmData } from './film-data'

function App() {
  const [filmIndex, setFilmIndex] = useState(0)

  // length of filmData
  const len = filmData.length

  return (
    <div className="slides-app">
      <FilmDetail filmObj={filmData[filmIndex]} />
      <Buttons filmIndex={filmIndex} setFilmIndex={setFilmIndex} len={len} />
      <Pagination filmIndex={filmIndex} setFilmIndex={setFilmIndex} len={len} />
    </div>
  )
}

const FilmDetail = ({ filmObj}) => {
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
    </>
  )
}

const Buttons = ({ filmIndex, setFilmIndex, len }) => {
  return (
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
  )
}

const Pagination = ({ filmIndex, setFilmIndex, len }) => {
  return (
    <ul class="pagination">
      <li class={filmIndex === 0 ? "disabled" : "waves-effect"}><a href="#!"
      onClick={() => {
        filmIndex === 0 ? setFilmIndex(filmIndex) : setFilmIndex(filmIndex-1)
      }}
      ><i class="material-icons">chevron_left</i></a></li>
      {Array(len).fill(0).map((el, index) => {
        return <li class={filmIndex === index ? "active" : "waves-effect"}><a href="#!" onClick={() => setFilmIndex(index)}>{index}</a></li>
      })}
      <li class={filmIndex === len-1 ? "disabled" : "waves-effect"}><a href="#!"
      onClick={() => {
        filmIndex === len-1 ? setFilmIndex(filmIndex) : setFilmIndex(filmIndex+1)
      }}
      ><i class="material-icons">chevron_right</i></a></li>
    </ul>
  )
}



export default App
