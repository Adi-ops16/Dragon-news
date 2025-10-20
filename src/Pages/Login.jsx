import { Eye, EyeOff } from 'lucide-react';
import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { logIn } = use(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        logIn(email, password)
        e.target.reset()
        navigate(`${location.state ? location.state : "/"}`)
    }

    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-100px)]">
            <div className="hero-content justify-center items-center">
                <div className="card bg-base-100 w-96 shrink-0 shadow-2xl rounded-none">
                    <div className="card-body px-10 py-10">
                        <h1 className='text-xl font-bold text-center text-primary py-5 border-b border-base-300'>Login To Your Account</h1>
                        <form onSubmit={handleLogin} className='text-primary mt-2'>
                            <fieldset className="fieldset">
                                {/* email */}
                                <label className="label text-primary font-semibold">Email Address</label>
                                <input name='email'
                                    type="email"
                                    className="input text-primary" placeholder="Email" />
                                {/* password */}
                                <div className='relative'>
                                    <label className="label mb-1 text-primary font-semibold">Password</label>
                                    <input name='password'
                                        type={showPassword ? "text" : "password"} className="input text-primary relative" placeholder="Password" />
                                    <span onClick={() => setShowPassword(!showPassword)} className='absolute bottom-3 right-2 cursor-pointer z-1'>
                                        {showPassword ? <Eye size={15}></Eye> : <EyeOff size={15}></EyeOff>}
                                    </span>
                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type='submit' className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <p className='text-center'>Don't have an account?
                            <Link to="/auth/register" className='text-secondary font-semibold'>
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;