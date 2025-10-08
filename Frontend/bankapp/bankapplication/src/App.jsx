import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import ListAccounts from './components/ListAccounts'
import AccountForm from './components/AccountForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <ListAccounts/>
   <AccountForm/>
       
    </>
  )
}

export default App
