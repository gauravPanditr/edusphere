import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'



const  Navbar= () => {
  
const {openSignIn}=useClerk();
const {user}=useUser();
  return (
    <div className='flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-14'>
      <img src={assets.logo} alt="Logo" className='w-28 lg:w 32 cursor-pointer' />
      <div className ='hidden md:flex items-center gap-5  text-gray-500'>
        <div>
          <button>
            Become Educator
          </button>
          <Link to='/my-enrollment'>
          My enrollment
          </Link>
          
        </div>
        {user ? <UserButton/>:
       <button onClick={() => openSignIn()} className="bg-blue-600 text-white px-5 py-2 rounded-full relative z-50 cursor-pointer">
  Create Account
</button>

        }
      </div>
          </div>
  )
}

export default Navbar
