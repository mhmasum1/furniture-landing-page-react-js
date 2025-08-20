import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <main className='min-h-screen'>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
