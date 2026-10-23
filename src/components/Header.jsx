import './Header.css'

export default function Header() {
  return (
    <header id="header">
      <h3 id="logo">
        sh <span id="color1">o</span>
        <span id="color2">o</span>
        <span id="color3">oe</span> s
      </h3>

      <nav id="nav">
        <div id="searchBox">
          <input type="text" placeholder="Pesquise alguma coisa" />
          <button>&gt;</button>
        </div>

        <div id="buttonBox">
          <button>Carrinho</button>
          <button>Login</button>
        </div>
      </nav>
    </header>
  )
}
