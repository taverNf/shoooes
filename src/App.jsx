import { useState } from 'react'
import Header from './components/Header'
import Products from './components/Products'
import './App.css'

function App() {
  const [searchFilter, setSearchFilter] = useState('')

  function handleSearch(search) {
    setSearchFilter(search)
  }

  return (
    <>
      <Header onSearch={handleSearch} searchBar />
      <Products searchFilter={searchFilter} />
    </>
  )
}

export default App
