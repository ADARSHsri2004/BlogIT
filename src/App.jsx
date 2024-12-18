import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // const [themeMode, setThemeMode] = useState("light")

  // const lightTheme = () => {
  //   setThemeMode("light")
  // }

  // const darkTheme = () => {
  //   setThemeMode("dark")
  // }

  // useEffect(() => {
  //   document.querySelector('html').classList.remove("light", "dark")
  //   document.querySelector('html').classList.add(themeMode)
  // }, [themeMode])

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div >

      <Header />
      <main className='w-full'>
        <Outlet />
      </main>
      <Footer />

    </div>

  ) : null
}

export default App