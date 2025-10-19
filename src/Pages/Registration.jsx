import { Eye, EyeOff } from 'lucide-react';
import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Registration = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { createUser, setUser } = use(AuthContext)

    const handleRegistration = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photo.value
        const password = e.target.password.value

        createUser(email, password)
            .then(result => setUser(result.user))
            .catch(error => toast.error(error.code))
        e.target.reset()
    }

    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-100px)]">
            <div className="hero-content justify-center items-center">
                <div className="card bg-base-100 w-96 shrink-0 shadow-2xl rounded-none">
                    <div className="card-body px-10 py-10">
                        <h1 className='text-xl font-bold text-center text-primary py-5 border-b border-base-300'>Register Your Account</h1>
                        <form onSubmit={handleRegistration} className='text-primary mt-2'>
                            <fieldset className="fieldset">
                                {/* name */}
                                <label className="label text-primary font-semibold">Name</label>
                                <input name='name'
                                    type="text"
                                    className="input text-primary"
                                    placeholder="name" />
                                {/* Photo URL */}
                                <label className="label text-primary font-semibold">Photo URL</label>
                                <input name='photo'
                                    type="text"
                                    className="input text-primary"
                                    placeholder="Photo URL" />
                                {/* email */}
                                <label className="label text-primary font-semibold">Email Address</label>
                                <input required
                                    name='email'
                                    type="email"
                                    className="input text-primary" placeholder="Email" />
                                {/* password */}
                                <div className='relative'>
                                    <label className="label mb-1 text-primary font-semibold">Password</label>
                                    <input required
                                        name='password'
                                        type={showPassword ? "text" : "password"} className="input text-primary relative" placeholder="Password" />
                                    <span onClick={() => setShowPassword(!showPassword)} className='absolute bottom-3 right-2 cursor-pointer z-1'>
                                        {showPassword ? <Eye size={15}></Eye> : <EyeOff size={15}></EyeOff>}
                                    </span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <input required type="checkbox" className="checkbox" />
                                    <p>Accept Term & Conditions</p>
                                </div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                        <p className='text-center'>Already have an account?
                            <Link to="/auth/login" className='text-secondary font-semibold'>
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;