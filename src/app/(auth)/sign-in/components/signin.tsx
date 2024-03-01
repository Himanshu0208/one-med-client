"use client"

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(password,email);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="bg-white w-[500px] h-[550px] rounded-lg text-black justify-center py-10">
            <div className="flex flex-row justify-center font-semibold text-2xl">
                OneMed
            </div>
            <div className="px-6 mt-10">
                <div>Email</div>
                <input className="
                    bg-white
                    block 
                    w-full 
                    rounded-md 
                    outline-2
                    outline-black
                    border-0 
                    py-1.5 
                    text-black
                    placeholder:text-gray-400
                    shadow-outline"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className='mt-8'>Password</div>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className="
                    bg-white
                    block 
                    w-full 
                    rounded-md 
                    outline-2
                    outline-black
                    border-0 
                    py-1.5 
                    text-black
                    placeholder:text-gray-400
                    shadow-outline"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={togglePasswordVisibility}>
                    {showPassword ? 'Hide' : 'Show'} Password
                </button>
                <div className='flex flex-row justify-center'>
                    <Button onClick={handleSubmit} className='mt-8 bg-black'>
                        Submit
                    </Button>
                </div>
                <div className='flex flex-row justify-center'>
                <Link href="/sign-out" passHref>
                    <button className='mt-8 text-black'>Sign up?</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn;