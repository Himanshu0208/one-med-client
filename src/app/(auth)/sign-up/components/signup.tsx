"use client"

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        console.log(password, email);
    }

    return (
        <div className="bg-white w-[500px] h-[650px] rounded-lg text-black justify-center py-10">
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
                <button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? 'Hide' : 'Show'} Password
                </button>
                <div className='mt-8'>Confirm Password</div>
                <input
                    type={showConfirmPassword ? 'text' : 'password'}
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
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? 'Hide' : 'Show'} Confirm Password
                </button>
                <div className='flex flex-row justify-center'>
                    <Button onClick={handleSubmit} className='mt-8 bg-black'>
                        Submit
                    </Button>
                </div>
                <div className='flex flex-row justify-center'>
                    <Link href="/sign-in" passHref>
                        <button className='mt-4 text-black'>Sign in?</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp;