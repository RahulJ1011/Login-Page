import React, { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import {FaUser} from "react-icons/fa"
const Login = () => {
    const [login,SetLogin] = useState(true)
  return (
    <div className="bg-background h-[100vh] flex justify-center items-center">
      <div className="bg-gray-300 border border-slate-400 rounded-md p-8 shadow-lg bg-opacity-30 relative">
        {
            login ?
            <div>
          <h1 className="text-4xl text-white font-bold text-center mb-6">
            Welcome Back User
          </h1>
          <form className="flex flex-col">
            <div className="relative my-6">
            <input
                className="inp block w-72 py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-purple appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer "
                type="email"
                maxLength={50}
              />
              
              <label
                className="lab absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:background peer-focus:dark:text-background peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                htmlFor="email"
              >
                Email
              </label>
              <FaUser 
              className="absolute top-1 right-4"
              />
              
            </div>
            <div className="relative my-4">
            <input
                className="inp block w-72 py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-purple appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer "
                type="email"
                maxLength={40}
              />
              <label
                className="lab absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-background peer-focus:dark:text-background peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                htmlFor=""
              >
                Password
              </label>
              <RiLockPasswordLine
              className="absolute top-1 right-4"
              />
            </div>
            
            <div className="ml-auto mr-5">
              <span
              className="text-sm  text-blue-400 cursor-pointer hover:underline"
              >Forgot Password</span>
            </div>
            <button 
            className="bg-background text-white px-3 py-3 items-center rounded-sm my-4 mx-4"
            
            type="submit">Login</button>
            <div>
              <span className=" ml-5 font-small font-semibold">Don't have an account? </span>
              <button type="button" 
              onClick={()=> SetLogin(!login)}
              className="text-blue-400 cursor-pointer hover:underline">click here</button>
            </div>
          </form>
        </div>
        : 





        /* Register Page*/ 



        <div>
        <h1 className="text-4xl text-white font-bold text-center mb-6">
             Register
            </h1>
            <form className="flex flex-col">
              <div className="relative my-6">
              <input
                  className="inp block w-full  py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-purple appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer "
                  type="email"
                  maxLength={30}
                />
                
                <label
                  className="lab absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:background peer-focus:dark:text-background peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor="email"
                >
                  Email
                </label>
                <FaUser 
                className="absolute top-1 right-4"
                />
                
              </div>
              <div className="relative my-4">
                <input
                  className="inp block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-purple appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer "
                  type="password"
                  maxLength={20}
                  
                />
                <label
                  className="lab absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-background peer-focus:dark:text-background peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor=""
                >
                  Password
                </label>
                <RiLockPasswordLine
                className="absolute top-0 right-4"
                />
              </div>
              <div className="relative my-4">
                <input
                  className="inp block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-purple appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer "
                  type="password"
                  maxLength={20}
                />
                <label
                  className="lab absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-background peer-focus:dark:text-background peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor=""
                >
                  Confirm Password
                </label>
                <RiLockPasswordLine
                className="absolute top-0 right-4"
                />
              </div>
              
             
              <button 
              className="bg-background text-white px-3 py-3 items-center rounded-sm my-4 mx-4"
              
              type="submit">Register</button>
              <div>
                <span className=" font-small font-semibold">Already have an account? </span>
                <button 
                onClick={()=> SetLogin(!login)}
                type="button" className="text-blue-400 cursor-pointer hover:underline">click here</button>
              </div>
            </form>
      </div>
        }
      </div>
    </div>
  );
};

export default Login;
