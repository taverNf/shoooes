import { useContext, useState } from 'react'
import { AppUsersContext } from '../context/AppUsersContext'
import { Search, User, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import './Header.css'

export default function Header({ searchBar, onSearch }) {
  const [search, setSearch] = useState('')

  const { currentUser } = useContext(AppUsersContext)

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

        {currentUser.username ? (
          <div id="buttonBox">
            <ShoppingCart strokeWidth={1.5} color={'#333'} className="icon" />
            <User strokeWidth={1.5} color={'#333'} className="icon" />
          </div>
        ) : (
          <Link id="login" to={'/login'}>
            Entrar
          </Link>
        )}
      </nav>
    </header>
  )
}
