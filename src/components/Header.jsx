import { useState } from 'react'
import { Search, User, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import './Header.css'

export default function Header({ searchBar, onSearch }) {
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
      <Link to={'/'} id="logoContainer">
        <img src={Logo} alt="Logo" id="logo" />
      </Link>

      <nav id="nav">
        {search && (
          <button id="clearBtn" onClick={handleClearSearch}>
            Limpar
          </button>
        )}
        {searchBar && (
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
        )}
        

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
