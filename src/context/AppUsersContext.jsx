import { createContext, useEffect, useState } from 'react'

export const AppUsersContext = createContext()

export const AppUsersProvider = ({ children }) => {
  const [appUsers, setAppUsers] = useState(JSON.parse(localStorage.getItem('appUsers')) || [])

  useEffect(() => {
    localStorage.setItem('appUsers', JSON.stringify(appUsers)),
    [appUsers]
  })

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || null)

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser)),
    [currentUser]
  })

  function handleCreateUser(username, email, password) {
    if (!username.trim() || !email.trim() || !password.trim()) { alert("preencha todos os campos"); return }
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
    if (!reqUser.email || !reqUser.password){ alert('preencha todos os campos'); return }

    const userIndex = appUsers.findIndex(user => user.email === reqUser.email)

    if (userIndex === -1) { alert('conta nao existente'); return false }

    const newCurrentUser = appUsers[userIndex]

    if (newCurrentUser.password !== reqUser.password) { alert('senha incorreta'); return false }
    
    alert('login realizado com sucesso!')
    alert(`boas vindas, ${newCurrentUser.username}!`)

    setCurrentUser(newCurrentUser)

    return true
  }

  function handleLogout() {
    const confirmed = confirm("deseja sair sua conta?")
    if (confirmed) { alert("você saiu da sua conta"); setCurrentUser(null); return }
  }

  return <AppUsersContext.Provider value={{ appUsers, handleCreateUser, handleLogin, handleLogout, currentUser }} >{children}</AppUsersContext.Provider>
}
