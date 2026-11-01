import { useContext, useState } from 'react'
import { AppUsersContext } from '../context/AppUsersContext'
import { useNavigate, Link } from 'react-router-dom'
import { Check, Minus } from 'lucide-react'

import { CHARACTERS } from '../utils/data.js'

import Header from '../components/Header'

import './SignPage.css'

export default function SignUp() {
  const { handleCreateUser } = useContext(AppUsersContext)

  const navigate = useNavigate()

  const [user, setUser] = useState({ username: '', email: '', password: '' })
  const [checked, setChecked] = useState({ username: false, password: { minMaxLength: false, characters: false } })
  const [fieldChanged, setFieldChanged] = useState({ username: false, password: false })

  function handleChangeCurrentUsername(newUsername) {
    
    if (newUsername.length >= 6 && newUsername.length <= 16) {
      setChecked({ ...checked, username: true })
    } else {
      setChecked({ ...checked, username: false })
    }
    
    setFieldChanged({ ...fieldChanged, username: true })

    const newUser = { ...user, username: newUsername }
    
    setUser(newUser)
  }
  
  function handleChangeCurrentEmail(newEmail) {
    const newUser = { ...user, email: newEmail }
    
    setUser(newUser)
  }
  
  function handleChangeCurrentPassword(newPassword) {
    const passwordChars = [...newPassword]
    
    const hasLetter = passwordChars.some((char) => CHARACTERS.letters.includes(char))
    const hasNumber = passwordChars.some((char) => CHARACTERS.numbers.includes(char))
    const hasSpecial = passwordChars.some((char) => CHARACTERS.special.includes(char))

    const validLength = newPassword.length >= 6 && newPassword.length <= 16
    const validChars = hasLetter && hasNumber && hasSpecial
    
    setChecked({ ...checked, password: {
      minMaxLength: validLength,
      characters: validChars
    } })
    
    setFieldChanged({ ...fieldChanged, password: true })
    
    const newUser = { ...user, password: newPassword }

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
        <div className="title">
          <h1>Crie uma conta</h1>
          <h3>
            Já tem uma? <Link to={'/login'}>Clique aqui para entrar</Link>
          </h3>
        </div>

        <div className="formContainer">
          <div className="inputBox">
            <label htmlFor="username">Nome de usuário</label>
            <input
              type="text"
              value={user.username}
              onChange={e => handleChangeCurrentUsername(e.target.value)}
              placeholder="nomeExemplo"
              id="username"
              required
            />
            <ul className="req">
              <li className={checked.username && 'checked'}>
                {checked.username ? <Check strokeWidth={2} color={'#0ea900'} size={14} />
                : <Minus strokeWidth={2} color={fieldChanged.username ? '#dd5c5c' : '#999'} size={14} />
                }
                Deve conter de 6 a 16 caracteres
              </li>
            </ul>
          </div>

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
            <ul className="req">
              <li className={checked.password.minMaxLength && 'checked'}>
                {checked.password.minMaxLength ? <Check strokeWidth={2} color={'#0ea900'} size={14} />
                : <Minus strokeWidth={2} color={fieldChanged.password ? '#dd5c5c' : '#999'} size={14} />
                }
                Deve conter de 6 a 16 caracteres
              </li>
              <li className={checked.password.characters && 'checked'}>
                {checked.password.characters ? <Check strokeWidth={2} color={'#0ea900'} size={14} />
                : <Minus strokeWidth={2} color={fieldChanged.password ? '#dd5c5c' : '#999'} size={14} />
                }
                Deve conter letras, números e caracteres especiais
              </li>
            </ul>
          </div>

          <button onClick={() => {handleCallSignUp(user)}}>
            Criar conta
          </button>
        </div>
      </main>
    </>
  )
}
