import { useState, useEffect } from 'react'
import Films from './assets/films'

function App() {
const [searchTxt, setSearchTxt] = useState('')

const [filteredFilms , setFilteredFilms] = useState(Films)

useEffect(()=>{
  const filtered = Films.filter(({genre}) => genre.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase()))
  setFilteredFilms(filtered)
},[searchTxt, Films])
  return (
    <>
      <div className="container">
        <div className="container">
          <h1>FILMS</h1>
          <input type="search" className='form-control me-2' placeholder='Search' aria-label='Search' onChange={event => setSearchTxt(event.target.value)} />
          {filteredFilms.map((Film, index)=>{
            return (
              <li key={(index)}>{Film.title} {Film.genre}</li>
            )
          })}

        </div>
      </div>
    </>
  )
}

export default App
