import { createContext, useState } from 'react'

export const AppUsersContext = createContext()

export const AppUsersProvider = ({ children }) => {
  const [appUsers, setAppUsers] = useState([{
    username: 'juReigota',
    email: 'jureigota10@gmail.com',
    password: '23'
  }])
  const [currentUser, setCurrentUser] = useState({})

  function handleCreateUser(username, email, password) {
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

    setAppUsers(updatedUsers)
  }

  function handleLogin(reqUser) {
    if (!reqUser.email || !reqUser.password){ alert('preencha os campos'); return }

    const userIndex = appUsers.findIndex(user => user.email === reqUser.email)

    if (userIndex === -1) { alert('usuario nao existente'); return false }
    if (appUsers[userIndex].password !== reqUser.password) { alert('senha incorreta'); return false }

    const newCurrentUser = appUsers[userIndex]
    
    alert('login realizado com sucesso!')
    alert(`boas vindas, ${newCurrentUser.username}!`)

    setCurrentUser(newCurrentUser)

    return true
  }

  return <AppUsersContext.Provider value={{ appUsers, handleCreateUser, handleLogin, currentUser }} >{children}</AppUsersContext.Provider>
}
