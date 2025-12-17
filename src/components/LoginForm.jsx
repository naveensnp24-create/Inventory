import { useState,useRef } from "react"
import { useNavigate } from "react-router";
import AdminPage from "./AdminPage";
import {toast} from "react-toastify";
import axios from "axios";




const LoginForm=()=>{
    const [username,setuserName]=useState('');
    const [password,setPassword]=useState('');
    const [role,setRole]=useState('');
    const navigate= useNavigate()
    const passwordRef=useRef('')
    
    const handleNameChange=(e)=>{
        setuserName(e.target.value)
    }
    
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }
    const handleRoleChange=(e)=>{
        setRole(e.target.value)
    }
    
  
        const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(username,passwordRef.current.value)
        const {data} = await axios.post("http://localhost:3000/auth/login",{
            email:username,
            password:passwordRef.current.value
    })
    console.log("response =>",data)
    toast.success(data.message);
    sessionStorage.setItem("token",data.token);
    sessionStorage1.setItem('isLoggedIn', 'true');
    navigate('/products');
         if (username === "abc" && passwordRef.current.value === "admin" && role === "user") {
      toast.success("Login Successful");
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("role", "user");
      navigate("/");
    } else if (username === "admin" && passwordRef.current.value === "admin" && role === "admin") {
      console.log("Login Successful to Admin");
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("role", "admin");
      navigate("/AdminPage");
    } else {
      toast.error("Invalid Credentials");
    }
    }


    console.log(username)
    console.log(password)
    return(
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-slate-900 shadow-2xl rounded-2xl p-8 border border-slate-700">    
                <form className="flex flex-col space-y-4">
                    <h1 className="text-center text-3xl font-bold text-white mb-6">LOGIN</h1>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Username</label>
                        <input type="text" id="email" name="E-MAIL" placeholder="Enter username" value={username} className="bg-slate-800 border border-slate-700 text-white rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={handleNameChange}/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                        <input type="password" id="pass" name="PASSWORD" placeholder="Enter password" value={password} className="bg-slate-800 border border-slate-700 text-white rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={handlePasswordChange} ref={passwordRef}/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Role</label>
                        <input type="text" id="role" name="Role" placeholder="Enter role" value={role} className="bg-slate-800 border border-slate-700 text-white rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={handleRoleChange}/>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg mt-6" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
    )
}
export default LoginForm;