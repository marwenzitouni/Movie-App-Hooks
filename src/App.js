import React from 'react'
import MovieList from './components/MovieList'
import data from './data'
import './App.css'

const App = () => {
  return (
    <div>
      <MovieList data={data}/>
      
    </div>
  )
}

export default App