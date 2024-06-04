import React from 'react';
import { Link } from "react-router-dom";
// Tailwind CSS classes reused more than 2 times are extracted as constants
const centerFlexClass = "flex flex-col items-center justify-center";
const buttonClass = "bg-black text-white px-4 py-2 rounded hover:bg-zinc-700";
const marginBottom6 = "mb-6";
const marginBottom2 = "mb-2";

export default function NotFoundPage() {
    return (
        <div className={`${centerFlexClass} min-h-screen bg-white text-black pb-20 `}>
            <Heading />
            <Message />
            <HomeButton />
        </div>
    );
}


function Heading() {
    return (
        <h1 className={`text-6xl font-bold ${marginBottom2}`}>404</h1>
    );
}

function Message() {
    return (
        <p className={`text-2xl ${marginBottom6}`}>Page Not Found</p>
    );
}

function HomeButton() {
    return (
        <Link to={"/"} className={buttonClass}>Go Home</Link>
    );
}

