import React from 'react'
import { Button, Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import ThemeBtn from './ThemeBtn'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='p-4 bg-white fixed top-0 left-0 w-full z-10 shadow-md'>
      <Container>
        <nav className='flex items-center justify-between flex-wrap'>
          {/* Logo Section */}
          <div className='flex-shrink-0'>
            <Link to='/'>
              <Logo width='50px' className='w-[50px] h-auto' />
            </Link>
          </div>

          {/* Navigation Items */}
          <ul className='flex items-center gap-2 ml-auto flex-wrap md:gap-6 overflow-x-auto'>
            {/* Theme Toggle */}
            <li>
              {/* <ThemeBtn /> */}
            </li>

            {/* Dynamic Navigation Items */}
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-4 py-2 rounded-full text-sm md:text-base duration-200 hover:bg-blue-200 hover:text-blue-600'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {/* Logout Button */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
