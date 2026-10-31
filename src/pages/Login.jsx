import { useContext, useState } from 'react'
import { AppUsersContext } from '../context/AppUsersContext'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
      <main>
        <h1>Entre em sua conta</h1>
        <h3>
          Ainda não tem uma? <Link to={'/signup'} >Clique aqui para criar</Link>
        </h3>
      </main>
      <input
        type="email"
        value={user.email}
        onChange={e => handleChangeCurrentEmail(e.target.value)}
        placeholder="email"
        required
      />
      <input
        type="password"
        value={user.password}
        onChange={e => handleChangeCurrentPassword(e.target.value)}
        placeholder="password"
        required
      />
      <button onClick={() => {handleCallLogin(user)}}>
        Entrar
      </button>
    </>
  )
}
