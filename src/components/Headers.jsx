import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextComponent';
import { toast } from 'react-toastify';
import userImg from '../assets/user.png'
export default function Headers() {
  const {user, logOut, loader} = useContext(AuthContext)
  if(loader){
    return (
        <div className=" h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    )
}
const handleLogOut = () => {
  logOut()
  .then(() => {
    toast.success('Sign Out')

  })
  .catch((error)=> {
    console.log(error.message)
  })
}
  return (
    <div className="container mx-auto py-4">
       <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to='/'> <li className='text-lg font-semibold'>Home</li> </NavLink>
          <NavLink to='/allArtAndCraftItems'> <li className='text-lg font-semibold'>All Art & Craft Items</li> </NavLink>
          <NavLink to='/addCraftItem'> <li className='text-lg font-semibold'>Add Craft Item</li> </NavLink>
          <NavLink to='/myArtAndCraftList'> <li className='text-lg font-semibold'>My Art & Craft List</li> </NavLink>
          </ul>
        </div>
        <Link to='/'>
            <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-7">
          <NavLink to='/'> <li className='text-lg font-semibold'>Home</li> </NavLink>
          <NavLink to='/allArtAndCraftItems'> <li className='text-lg font-semibold'>All Art & Craft Items</li> </NavLink>
          <NavLink to='/addCraftItem'> <li className='text-lg font-semibold'>Add Craft Item</li> </NavLink>
          <NavLink to='/myArtAndCraftList'> <li className='text-lg font-semibold'>My Art & Craft List</li> </NavLink>
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        {/* user profile */}
        {user && (
          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={user?.photoURL || userImg} />
                </div>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content mt-3 z-40 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>{user?.displayName || 'user name not found'}</a>
                </li>
                <li>
                <Link
            onClick={handleLogOut}
              to="/"
              className="md:btn btn-sm lr-btn"
            >
              Log Out
            </Link>
                </li>
              </ul>
            </div>
          </div>
        ) }

        {/* user profile end */}
        <div className='space-x-2'>
            <Link to='/login'>
         <button className="md:btn btn-sm lr-btn">Login</button>
        </Link>
        <Link to='/register'>
         <button className="md:btn btn-sm lr-btn">Register</button>
        </Link>
          </div>

      </div>
    </div>
    </div>

  )
}
