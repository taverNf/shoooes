import { createContext, useState } from 'react'

export const AppUsersContext = createContext()

export const AppUsersProvider = ({ children }) => {
  const [appUsers, setAppUsers] = useState([
    {
      id: 1,
      username: 'juReigota',
      email: 'jureigota10@gmail.com',
      password: '23',
      cart: {
        items: [],
        totalPrice: 0,
      },
      favorites: [],
    },
  ])
  const [currentUser, setCurrentUser] = useState({})

  function handleCreateUser(username, email, password) {
    if (appUsers.find(user => user.email === email)) { alert(`o email "${email}" já possui uma conta cadastrada.`); return }
    if (appUsers.find(user => user.username === username)) { alert(`o username "${username}" já existe.`); return }

    const newUser = {
      id: appUsers.length + 1,
      username,
      email,
      password,
      cart: {
        items: [],
        totalPrice: 0,
      },
      favorites: [],
    }

    const updatedUsers = [...appUsers, newUser]

    alert('cadastro realizado com sucesso!')
    alert(`boas vindas, ${newUser.username}!`)

    setAppUsers(updatedUsers)
    setCurrentUser(newUser)

    console.log(updatedUsers)

    return true
  }

  function handleLogin(reqUser) {
    if (!reqUser.email || !reqUser.password){ alert('preencha os campos'); return }

    const userIndex = appUsers.findIndex(user => user.email === reqUser.email)

    if (userIndex === -1) { alert('conta nao existente'); return false }

    const newCurrentUser = appUsers[userIndex]

    if (newCurrentUser.password !== reqUser.password) { alert('senha incorreta'); return false }
    
    alert('login realizado com sucesso!')
    alert(`boas vindas, ${newCurrentUser.username}!`)

    setCurrentUser(newCurrentUser)

    return true
  }

  return <AppUsersContext.Provider value={{ appUsers, handleCreateUser, handleLogin, currentUser }} >{children}</AppUsersContext.Provider>
}
