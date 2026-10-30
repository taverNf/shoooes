import { useContext, useState } from 'react'
import { AppUsersContext } from '../context/AppUsersContext'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { handleLogin, currentUser } = useContext(AppUsersContext)

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

  function handleCallLogin(user) {
    if (handleLogin(user)) {
      navigate('/')
    }
  }

  return (
    <>
      <Header />
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
      <button onClick={() => {handleCallLogin(user)}}>Logar</button>
    </>
  )
}
