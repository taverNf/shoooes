import { useContext, useState } from 'react'
import { AppUsersContext } from '../context/AppUsersContext'
import { useNavigate, Link } from 'react-router-dom'

import Header from '../components/Header'

import './SignPage.css'

export default function Login() {
  const { handleLogin } = useContext(AppUsersContext)

  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  function handleChangeCurrentEmail(newEmail) {
    const newUser = {
      ...user,
      email: newEmail,
    }

    setUser(newUser)
  }

  function handleChangeCurrentPassword(newPassword) {
    const newUser = {
      ...user,
      password: newPassword,
    }

    setUser(newUser)
  }

  function handleCallLogin(user) {
    if (handleLogin(user)) {
      navigate('/')
    }
  }

  return (
    <>
      <Header />
      <main id="signContent">
        <div className="title">
          <h1>Entre em sua conta</h1>
          <h3>Ainda não tem uma? <Link to={'/signup'}>Clique aqui para criar</Link></h3>
        </div>
        <div className="formContainer">
          <div className="inputBox">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={user.email}
              onChange={e => handleChangeCurrentEmail(e.target.value)}
              placeholder="nome-exemplo@gmail.com"
              id="email"
              required
            />
          </div>

          <div className="inputBox">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              value={user.password}
              onChange={e => handleChangeCurrentPassword(e.target.value)}
              placeholder="exemplo123"
              id="password"
              required
            />
          </div>

          <button onClick={() => {handleCallLogin(user)}}>
            Entrar
          </button>
        </div>
      </main>
    </>
  )
}
