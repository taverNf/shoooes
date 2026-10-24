import { useState } from 'react'
import './Header.css'

export default function Header({ onSearch }) {
  const [search, setSearch] = useState('')

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
        {search && <button id="clearBtn" onClick={handleClearSearch}>Limpar</button>}
        <div id="searchBox">
          <input type="text" placeholder="Pesquise alguma coisa" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button onClick={() => onSearch(search)}>&gt;</button>
        </div>

        <div id="buttonBox">
          <button>Carrinho</button>
          <button>Login</button>
        </div>
      </nav>
    </header>
  )
}
