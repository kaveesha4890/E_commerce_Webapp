import React, { useContext, useState } from 'react'
//import loginIcons from '../assest/signin.gif'
import { VscAccount } from "react-icons/vsc";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

function Login() {
    const [showpassword,setpassword] = useState(false);
    const [data,setData] = useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate()
    const {fetchUserDetails,fetchUserAddToCart} = useContext(Context)

    

    const handleOnChange = (e) => {
        const {name ,  value} = e.target

        setData((preve) => {
            return {
                ...preve,
                [name] : value
            }
        })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()

        const dataResponse = await fetch(SummaryApi.signIn.url,{
            method : SummaryApi.signIn.method,
            credentials : "include",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })    

        const dataApi = await dataResponse.json()

        if(dataApi.success){
            toast.success(dataApi.message)
            navigate('/')
            fetchUserDetails()
            fetchUserAddToCart()
        }
        if(dataApi.error){
            toast.error(dataApi.message)
        }
    }
    console.log("data login",data)
  return (
    <section id='login'>
        <div className='mx-auto container px-4 p-4'>
            <div className='bg-white p-2  w-sm max-w-md mx-auto rounded'>
                <div className='w-20 h-20 mx-auto text-7xl text-red-700'>
                    <VscAccount />
                </div>
                <form className='pt-6 flex-col gap-2' onSubmit={handleSubmit}>
                    <div className='grid'>
                        <label>Email : </label>
                        <div className='bg-blue-200 p-2 mx-2  rounded-2xl'>

                            <input 
                                type='email' 
                                placeholder='Enter Email'
                                name ="email"
                                value={data.email}
                                onChange={handleOnChange}
                                className='w-full h-full outline-none bg-transparent'/>
                        </div>
                    </div>
                    <div >
                        <label>Password :</label>
                        <div className='bg-blue-200 p-2 mx-2 rounded-2xl flex'>
                            <input 
                                type={showpassword ? "text":'password'} 
                                placeholder='Enter Password' 
                                name='password'
                                value={data.password}
                                onChange={handleOnChange}
                                className='w-full h-full outline-none bg-transparent'/>
                            <div className='cursor-pointer text-xl' onClick={()=>setpassword((preve)=>!preve)}>
                                <span>
                                    {
                                        showpassword ? (
                                            <IoMdEyeOff/>
                                        )
                                        :
                                        (
                                            <FaEye/>
                                        )
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                              Forgot password      
                        </Link>
                    </div>
                    <div>
                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2  w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4'>Login</button>
                    </div>
                </form>
                <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className='text-blue-500 hover:text-blue-700 hover:underline'>Sign Up</Link></p>
                
            </div>
        </div>
    </section>
    
  )
}

export default Login
