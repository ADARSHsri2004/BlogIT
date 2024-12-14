import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
//Imports useSelector from Redux, a hook that allows access to the Redux store's state
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  //for conditional rendering

  //slug: The URL path for the navigation link.

  //active: Determines whether the link should be visible based on the user's authentication status (authStatus).
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
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
          {/* Wraps the Logo component inside a <Link> pointing to the home page ('/'). */}
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
          {/* Loops through navItems using map to render <li> elements for active links */}
            {navItems.map((item) =>
            // item.active: Only renders the link if it is active.
              item.active ?
              // key={item.name}: Unique key for each list item.

                <li key={item.name}>
                  {/* Used to navigate to the slug route via navigate(item.slug) when clicked. */}
                  <button onClick={() => navigate(item.slug)} className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                    {item.name}
                  </button>
                </li> : null
            )}

            {/* Displays the LogoutBtn component inside an <li> if authStatus is true (user is authenticated). */}
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
//This code creates a dynamic header with authentication-aware navigation.
export default Header
