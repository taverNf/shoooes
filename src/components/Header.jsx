import { useState } from 'react'
import { Search, User, ShoppingCart } from 'lucide-react'
import './Header.css'

export default function Header({ onSearch }) {
  const [logged, setLogged] = useState(false)
  const [search, setSearch] = useState('')

  function handleLogin() {
    setLogged((prev) => !prev)
  }

  function handleClearSearch() {
    setSearch('')
    onSearch('')
  }

  return (
    <header id="header">
      <h3 id="logo">
        sh <span id="color1">o</span>
        <span id="color2">o</span>
        <span id="color3">oe</span> s
      </h3>

      <nav id="nav">
        {search && (
          <button id="clearBtn" onClick={handleClearSearch}>
            Limpar
          </button>
        )}
        <div id="searchBox">
          <input
            type="text"
            placeholder="Pesquise alguma coisa"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Search
            color={'#fff'}
            className="icon"
            id="searchBtn"
            onClick={() => onSearch(search)}
          />
        </div>

        {logged ? (
          <div id="buttonBox">
            <ShoppingCart strokeWidth={1.5} color={'#333'} className="icon" />
            <User strokeWidth={1.5} color={'#333'} className="icon" onClick={handleLogin} />
          </div>
        ) : (
          <button id="login" onClick={handleLogin}>
            Login
          </button>
        )}
      </nav>
    </header>
  )
}
