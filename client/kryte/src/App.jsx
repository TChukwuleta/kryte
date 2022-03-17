import { useState } from 'react'
import { Navbar, Welcome, Footer, Services, Transactions } from './components'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
      
    </div>
  )
}

export default App
