import React, { useContext, useState } from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';

function Header() {

  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const [menuDisplay,setMenuDisplay] = useState(false)
  const context = useContext(Context)
  const navigate = useNavigate()
  const searchInput = useLocation()
  const [search,setSearch] = useState(searchInput?.search?.split("=")[1])

  console.log("search input",searchInput?.search.split("=")[1])


  const handleLogout = async() =>{
    const fetchData = await fetch(SummaryApi.logout_user.url,{
        method : SummaryApi.logout_user.method,
        credentials : 'include'
    })

    const data = await fetchData.json()

    if(data.success){
        toast.success(data.message)
        dispatch(setUserDetails(null))
        navigate("/")
    }
    if(data.error){
        toast.error(data.message)
    }
  }
  
  const handlesearch =(e)=>{
    const { value } = e.target
    setSearch(value)

    if(value){
        navigate(`/search?q=${value}`)
    }else{
        navigate("/search")
    }
  }

  return (
    <header className='h-16 shadow-md bg-white fixed w-full '>
        <div className='h-full container mx-auto flex items-center px-4 justify-between'>
            <div className=''>
                <Link to={"/"}>
                 <Logo w={90} h={50}/>
                </Link>
            </div>

            <div className='flex items-center'>
                <input type='text'  placeholder='Search Product here ' className='outline-none' onClick={handlesearch} value={search}/>
                <div className='text-lg '> 
                    <GrSearch/>
                </div>
            </div>
            <div className='flex item-center gap-7'>
                <div className='relative group flex justify-center'>
                    {
                        user?._id && (
                        <div className='text-2xl cursor-pointer' onClick={()=>setMenuDisplay(preve =>!preve)}>
                         <FaUser/>
                        </div>
                        )
                    }

                    
                    {
                        menuDisplay && (
                         <div className=' group-hover:block absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded '>
                          <nav>
                            {
                                user?.role === ROLE.ADMIN && (
                                    <Link to={"admin-panel/all-products"} className='whitespace-nowrap' onClick={()=>setMenuDisplay(preve =>!preve)}>Admin Panel</Link>
                                )
                            }
                            
                          </nav>
                         </div>
                        )
                    }
                    

                </div>

                    {
                        user?._id && (
                            <Link to={"/Cart"} className='text-2xl relative cursor-pointer'>
                                <span><FaShoppingCart/></span>
                    
                                <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                                <p className='text-sm'>{context?.cartProductCount}</p>
                                </div>
                            </Link>
                        )
                    }    
                <div>
                    {
                        user?._id ?(
                            <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-blue-700 hover:bg-blue-500'>Logout</button>
                        )
                        :(
                            <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-blue-700 hover:bg-blue-500'>Sign in</Link>
                        )
                    }
                     
                </div>
            </div>

            
        </div>
    </header>
  )
}

export default Header
