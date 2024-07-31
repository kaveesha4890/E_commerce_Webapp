import React,{ useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';


function SignUp() {

    const [showpassword,setpassword] = useState(false);
    const [showconfirmPassword,setShowConfirmPassword] = useState(false)
    const [data,setData] = useState({
        email : "",
        password : "",
        name :"",
        confirmpassword:""
    })

    const navigate = useNavigate()

    const handleOnChange = (e) => {
        const {name ,  value} = e.target

        setData((preve) => {
            return {
                ...preve,
                [name] : value
            }
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()

        if(data.password === data.confirmpassword){

            console.log("SummaryApi.signUP.url",SummaryApi.signUP.url)
            const dataResponse = await fetch(SummaryApi.signUP.url,{
                method : SummaryApi.signUP.method,
                headers : {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(data)
            })

            const dataApi = await dataResponse.json()
    
            if(dataApi.success){
                toast.success(dataApi.message)
                navigate("/login")
            }
            if(dataApi.error){
                toast.error(dataApi.message)
            }

        } else{
            toast.error("Please check password and confirmpassword")
            
        }

        
    }
    console.log("data login",data)
    
  return (
    <div>
      <section id='signup'>
        <div className='mx-auto container px-4 p-4'>
            <div className='bg-white p-2  w-sm max-w-md mx-auto rounded'>
                <div className='w-20 h-20 mx-auto text-7xl text-red-700'>
                    <VscAccount />
                </div>
                <form className='pt-6 flex-col gap-2' onSubmit={handleSubmit}>
                    <div className='grid'>
                        <label>Name : </label>
                        <div className='bg-blue-200 p-2 mx-2 rounded-2xl'>

                            <input 
                                type='text' 
                                placeholder='Enter your Name'
                                name ="name"
                                value={data.name}
                                onChange={handleOnChange}
                                className='w-full h-full outline-none bg-transparent'/>
                        </div>
                    </div>
                    <div className='grid'>
                        <label>Email : </label>
                        <div className='bg-blue-200 p-2 mx-2 rounded-2xl'>

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
                    <div >
                        <label>Confirm Password :</label>
                        <div className='bg-blue-200 p-2 mx-2 rounded-2xl flex'>
                            <input 
                                type={showconfirmPassword ? "text":'password'} 
                                placeholder='Re enter Password' 
                                name='confirmpassword'
                                value={data.confirmpassword}
                                onChange={handleOnChange}
                                className='w-full h-full outline-none bg-transparent'/>
                            <div className='cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                                <span>
                                    {
                                        showconfirmPassword ? (
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
                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4'>Sign Up</button>
                    </div>
                </form>
                <p className='my-5'>Already have account ? <Link to={"/login"} className='text-blue-500 hover:text-blue-700 hover:underline'>Login</Link></p>
                
            </div>
        </div>
    </section>
    </div>
  )
}

export default SignUp
