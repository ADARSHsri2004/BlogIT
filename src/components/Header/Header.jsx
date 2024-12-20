import React, { useEffect, useState } from 'react'
import { Button, Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import ThemeBtn from './ThemeBtn'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "About",
      slug: "/",
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
    <header className={`p-3 bg-white fixed top-0 left-0 w-full z-10 shadow-lg transition-transform transform ${showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}>
      < Container >
        <nav className='flex items-center justify-between flex-wrap'>
          {/* Logo Section */}
          <div className='flex-shrink-0 flex items-center justify-center'>
            <Link to='/'>
              <Logo />
            </Link>
              <span className='text-3xl font-semibold font-mono'>BlogIT</span>
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
                    className='inline-block px-4 py-2 rounded-lg text-sm md:text-base transform transition-all duration-500 hover:scale-1.2 hover:shadow-lg duration-400 ease-in-out  hover:bg-green-100'
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
      </Container >
    </header >
  )
}

export default Header
