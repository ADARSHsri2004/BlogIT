import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        //Calls the logOut method from authService.
        //The method returns a promise, and then is used to execute actions after a successful logout.
        authService.logOut().then(() => {
            //Once the logout process is complete, the logout action is dispatched to the Redux store.
            dispatch(logout())
        })
    }
    return (
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn
