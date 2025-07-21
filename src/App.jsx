import { useState, useEffect } from 'react'
import Films from './assets/films'

function App() {
  const [searchTxt, setSearchTxt] = useState('')

  const [filteredFilms, setFilteredFilms] = useState(Films)

  useEffect(() => {
    const filtered = Films.filter(({ genre }) => genre.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase()))
    setFilteredFilms(filtered)
  }, [searchTxt, Films])
  return (
    <>
      <div className="container">
        <div className="container">
          <h1>FILMS</h1>
          <select className="form-select" aria-label="default select example" onChange={event => setSearchTxt(event.target.value)}>
            <option value="">select genre...</option>
            <option value="azione">Azione</option>
            <option value="thriller">Thriller</option>
            <option value="romantico">romantico</option>
            <option value="fantascienza">Fantascienza</option>
          </select>
          {filteredFilms.map((Film, index) => {
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
