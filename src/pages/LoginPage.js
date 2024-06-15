import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { login } from '../actions/Action';
import { useDispatch, useSelector } from 'react-redux';
// Constants for repeated utility class strings for Tailwind
const inputBaseClasses = "bg-white dark:bg-white p-2 rounded-lg border border-black dark:border-gray-100 focus:outline-none";
const buttonsubmitBaseClasses = "flex items-center justify-center text-white p-2 rounded-md hover:bg-gray-700";
const buttonBaseClasses = "bg-white dark:bg-white p-2 rounded-lg border border-double border-black dark:border-gray-100 focus:outline-none hover:bg-gray-200";
const textZinc700DarkTextWhite = "text-black-700 dark:text-black";

export default function Login() {
    return (
        <>
        <div className="text-center">
            <h1 className="text-3xl font-bold text-zinc-800 mt-8 mb-6">Login in your account</h1>
        </div>
       
            <div className="flex justify-center items-center h-screen">
                <div className="w-full max-w-2xl bg-white dark:bg-zinc-700 shadow-lg rounded-lg p-2 pb-8 flex justify-center items-center overflow-hidden border border-gray-200 dark:border-gray-100">
                    <LoginFormArea />
                </div>
                <WelcomeArea />
            </div>
        
        </>
    );
};
// Components for the login form area
const LoginFormArea = () => {
    return (
        <div className="w-full md:w-1/2 flex flex-col">
            
            <div className="mt-8">
                <LoginForm />
            </div>
        </div>
    );
};

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const credentials={email,password}
  // Async thunk for user login

    const handleSubmit = (e) => {
      e.preventDefault();
     dispatch(login(credentials));
     
    };
    return (
        <form onSubmit={handleSubmit}>
             {error && <div className='text-red-600 '>{error}</div>}
            <div className="flex flex-col mb-4">
            
            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}  className={inputBaseClasses} placeholder="E-mail address" />
        </div>
        <div className="flex flex-col mb-4">
            
            <input type="Password" id="Password" onChange={(e) => setPassword(e.target.value)}  className={inputBaseClasses} placeholder="Password" />
        </div>

           
            <button type="submit" className={`${buttonsubmitBaseClasses} bg-black mb-4 w-full`}>{loading ? 'Logging in...' : 'Continue'}</button>
            <a href="#" className="text-sm text-red-500 hover:underline">Forgot Password?</a>
            <div className="flex items-center">
            <h6>You don't have an account?</h6>
            <Link className="text-sm text-red-500 hover:underline ml-2" to={"/signup"}>Sign up</Link>
        </div>

            <Divider />
            <SocialLogins />
        </form>
    );
};

// Input field component
const InputField = ({ label, type, id, placeholder }) => {
    return (
        <div className="flex flex-col mb-4">
            
            <input type={type} id={id} className={inputBaseClasses} placeholder={placeholder} />
        </div>
    );
};

// Social login buttons
const SocialLogins = () => {
    return (
        <div className="flex flex-col space-y-4 mt-4">
            <button className={`${buttonBaseClasses} `}>
            <div className="flex items-center justify-center">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.714 10.4601H21.8749V10.4168H12.4999V14.5835H18.3869C17.528 17.009 15.2202 18.7502 12.4999 18.7502C9.04836 18.7502 6.24992 15.9517 6.24992 12.5002C6.24992 9.0486 9.04836 6.25016 12.4999 6.25016C14.0931 6.25016 15.5426 6.8512 16.6463 7.83297L19.5926 4.88662C17.7322 3.15277 15.2437 2.0835 12.4999 2.0835C6.74731 2.0835 2.08325 6.74756 2.08325 12.5002C2.08325 18.2528 6.74731 22.9168 12.4999 22.9168C18.2525 22.9168 22.9166 18.2528 22.9166 12.5002C22.9166 11.8017 22.8447 11.12 22.714 10.4601Z" fill="#FFC107"/>
            <path d="M3.28442 7.65172L6.70682 10.1616C7.63286 7.86891 9.87557 6.25016 12.5 6.25016C14.0933 6.25016 15.5428 6.8512 16.6464 7.83297L19.5928 4.88662C17.7323 3.15277 15.2438 2.0835 12.5 2.0835C8.49901 2.0835 5.02922 4.34235 3.28442 7.65172Z" fill="#FF3D00"/>
            <path d="M12.5 22.9165C15.1906 22.9165 17.6354 21.8868 19.4839 20.2124L16.2599 17.4842C15.1789 18.3063 13.8581 18.7509 12.5 18.7499C9.79062 18.7499 7.4901 17.0223 6.62344 14.6113L3.22656 17.2285C4.95052 20.602 8.45156 22.9165 12.5 22.9165Z" fill="#4CAF50"/>
            <path d="M22.7141 10.4597H21.875V10.4165H12.5V14.5832H18.387C17.9761 15.7376 17.2361 16.7463 16.2583 17.4847L16.2599 17.4837L19.4839 20.2118C19.2557 20.4191 22.9167 17.7082 22.9167 12.4998C22.9167 11.8014 22.8448 11.1196 22.7141 10.4597Z" fill="#1976D2"/>
        </svg> 
        <span className="ml-2">Continue with Googel</span>
    </div>      
            </button>
            <button className={`${buttonBaseClasses} `}>
        <div className="flex items-center justify-center ml-4">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_134_238)">
        <path d="M8.55464 8.55464H0V0H8.55464V8.55464Z" fill="#F1511B"/>
        <path d="M17.9999 8.55464H9.44531V0H17.9999V8.55464Z" fill="#80CC28"/>
        <path d="M8.55443 18H0V9.44531H8.55443V18Z" fill="#00ADEF"/>
        <path d="M17.9999 18H9.44531V9.44531H17.9999V18Z" fill="#FBBC09"/>
        </g>
        <defs>
        <clipPath id="clip0_134_238">
        <rect width="18" height="18" fill="white"/>
        </clipPath>
        </defs>
        </svg>
            <span className="ml-2">Continue with Microsoft</span>
            </div>
            </button>
            <button className={`${buttonBaseClasses}`} style={{ height: '40px' }}>
    <div className="flex items-center justify-center mr-4">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.8917 23.66C18.7484 24.7683 17.5 24.5933 16.2984 24.0683C15.0267 23.5317 13.86 23.5083 12.5184 24.0683C10.8384 24.7917 9.9517 24.5817 8.94836 23.66C3.25503 17.7917 4.09503 8.855 10.5584 8.52833C12.1334 8.61 13.23 9.39167 14.1517 9.46167C15.5284 9.18167 16.8467 8.37667 18.3167 8.48167C20.0784 8.62167 21.4084 9.32167 22.2834 10.5817C18.6434 12.7633 19.5067 17.5583 22.8434 18.9C22.1784 20.65 21.315 22.3883 19.88 23.6717L19.8917 23.66ZM14.035 8.45833C13.86 5.85667 15.9717 3.71 18.3984 3.5C18.7367 6.51 15.6684 8.75 14.035 8.45833Z" fill="#111111"/>
    </svg>
        <span className="ml-2">Continue with Apple</span>
    </div>
    </button>

        </div>
    );
};

// Divider component
const Divider = () => {
    return (
        <div className="flex justify-center items-center mt-4">
            <span className="bg-black h-px flex-grow t-2"></span>
            <span className="flex-none uppercase text-xs text-black-400 font-semibold mx-4">or</span>
            <span className="bg-black h-px flex-grow t-2"></span>
        </div>
    );
};

// Components for the welcome area
const WelcomeArea = () => {
    return (
        <div className="w-1/2 p-8 ml-4 mb-10">
            <div className="flex flex-col">
                <WelcomeMessage />
                <WelcomeVideo />
            </div>
        </div>
    );
};

const WelcomeMessage = () => {
    return (
        <div className="mb-4">
            <h1 className={`text-xl font-semibold ${textZinc700DarkTextWhite}`}>
                Welcome to E-com World Your Ultimate E-commerce Destination!</h1>
        </div>
    );
};

const WelcomeVideo = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className="flex justify-center relative">
            {showVideo ? (
                <video controls autoPlay loop className=" " width="400" height="300">
                    <source src="your-video-url.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <div className="relative">
                    <img src="https://placehold.co/400x300" alt="Welcome video placeholder" className="rounded-lg shadow-lg" style={{ objectFit: 'cover' }} />
                    <button className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white rounded-lg shadow-lg" onClick={() => setShowVideo(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 4v12l10-6z" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};