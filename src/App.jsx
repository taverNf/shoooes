import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Products from './components/Products'

function App() {
  const [searchFilter, setSearchFilter] = useState('')

  function handleSearch(search) {
    setSearchFilter(search)
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <Products searchFilter={searchFilter} />
    </>
  )
}

export default App
