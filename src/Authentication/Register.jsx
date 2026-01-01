import React from "react";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Register = ({ closeRegister }) => {
  return (
    <div className="fixed inset-0 z-30 bg-black/40 flex justify-center items-center">
      <div className="card shadow-xl p-6 rounded max-w-[350px] w-[90%] relative bg-white">
        <span onClick={closeRegister} className='absolute top-3 right-3 cursor-pointer text-2xl font-bold'>×</span>
        <div className="header">
          <h2 className="text-xl text-center text-[#777] font-black font-bold">Sign up</h2>
        </div>
        <div className="card-body mt-4">
          <form>
            <label htmlFor="email" className="text-[#777] text-[12px]">User Email</label>
            <input type="email" name="email" id="email" placeholder="email" className="w-full p-3 border border-[#777] mb-3" />

            <label htmlFor="password" className="text-[#777] text-[12px]">User Password</label>
            <input type="password" name="password" id="password" placeholder="password" className="w-full p-3 border border-[#777] mb-3" />

            <button className="bg-branding-success w-full p-3 text-white rounded cursor-pointer mt-2">Create a new Account</button>

            <button className="w-full text-sm cursor-pointer border mt-3 p-3 flex gap-3 items-center justify-center">
              <FcGoogle /> Sign up with Google
            </button>

            <div className='text-center my-3'>
              <small className="text-[#777] text-sm">
                Already have account? <Link to='/login' className='text-branding-success'>Login</Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
