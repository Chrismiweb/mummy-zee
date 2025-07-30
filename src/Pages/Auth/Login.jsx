import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import {ToastContainer, toast } from "react-toastify"; 
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');  // email or username
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const {setAdmin} = useContext(AuthContext)


  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('');

    // Replace with your real authentication logic
    if (!identifier || !password) {
      setError('Please fill in both fields.');
      return;
    }
    // calling api for authorization
        try {
      const response = await fetch("http://localhost:1040/login-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || " Invalid login credentials");
      }

      setAdmin(data.admin)
      toast.success("✅ Login Successful!");
      localStorage.setItem("token", data.token ) //store user token
      localStorage.setItem("username", data.admin.name); // ✅ store name
      navigate("/products")
      // return { success: true };
       } catch (err) {
         toast.error(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <ToastContainer />
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="px-8 py-16">
          <h2 className="text-[4vh] font-bold text-center text-gray-800 mb-6">
            Welcome Back
          </h2>
          {error && (
            <p className="text-red-600 text-sm mb-4 text-center">
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="identifier"
                className="block text-gray-700 mb-1"
              >
                Email or Username
              </label>
              <input
                id="identifier"
                type="text"
                name= "identifier"
                value={identifier}
                onChange={e => setIdentifier(e.target.value)}
                placeholder="you@example.com or yourusername"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(v => !v)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword
                        ? <AiOutlineEyeInvisible className="w-5 h-5" />
                        : <AiOutlineEye className="w-5 h-5" />
                        }
                    </button>
                </div>
            </div>
            <button
              type="submit"
                disabled={loading}
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition cursor-pointer text-[2vh]"
            >
                {loading ? <Loader /> : "Sign In"}
            </button>
          </form>
          <div className="mt-6 text-center text-[2vh]">
            <a
              href="#"
              className="text-indigo-600 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <div className="mt-4 text-center text-[2vh] text-gray-600">
            Don’t have an account?{' '}
            <a href="/signup" className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
