import { useContext, useState } from 'react'
import { AppUsersContext } from '../context/AppUsersContext'
import { Search, User, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import './Header.css'

export default function Header({ searchBar, onSearch }) {
  const { currentUser, handleLogout } = useContext(AppUsersContext)

  const [search, setSearch] = useState('')

  const [showingOptions, setShowingOptions] = useState(false)

  // const cartLength = currentUser ? currentUser.cart.items.length : null

  function handleClearSearch() {
    setSearch('')
    onSearch('')
  }

  function handleToggleOptions() {
    setShowingOptions(prev => !prev)
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
              id="searchInput"
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

        <div id="buttonBox">
          <div id="cart">
            {/* {cartLength > 0 && <p>{cartLength}</p>} */}
            <ShoppingCart strokeWidth={1.5} color={'#333'} className="icon" />
          </div>

          {currentUser &&
              <div id="user" onClick={handleToggleOptions}>
                <User strokeWidth={1.5} color={'#333'} className="icon" />      
                <p className="username">{currentUser.username}</p>
                {showingOptions &&
                  <div id="userOptions">
                    <button id="logout" onClick={handleLogout}>Sair</button>
                  </div>
                }
              </div>
          }
          {!currentUser && <Link id="login" to={'/login'}>Entrar</Link>}
        </div>
      </nav>
    </header>
  )
}
