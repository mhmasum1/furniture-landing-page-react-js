import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <main className='min-h-screen'>
        <Outlet></Outlet>
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default App
