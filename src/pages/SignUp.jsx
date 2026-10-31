import { useContext, useState } from 'react'
import { AppUsersContext } from '../context/AppUsersContext'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const { handleCreateUser } = useContext(AppUsersContext)

  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  function handleChangeCurrentUsername(newUsername) {
    const newUser = {
      ...user,
      username: newUsername,
    }

    setUser(newUser)
  }

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

  function handleCallSignUp(user) {
    const { username, email, password } = user

    if (handleCreateUser(username, email, password)) {
      navigate('/')
    }
  }

  return (
    <>
      <Header />
      <main>
        <h1>Crie uma conta</h1>
        <h3>
          Já tem uma? <Link to={'/login'}>Clique aqui para criar</Link>
        </h3>
      </main>
      <input
        type="text"
        value={user.username}
        onChange={e => handleChangeCurrentUsername(e.target.value)}
        placeholder="username"
        required
      />
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
      <button
        onClick={() => {
          handleCallSignUp(user)
        }}
      >
        Criar conta
      </button>
    </>
  )
}
