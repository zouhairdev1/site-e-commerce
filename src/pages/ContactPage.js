import React, { useState } from 'react';

const baseInputClasses = "w-full p-2 border border-zinc-300 rounded-md";
const containerClasses = "max-w-lg mx-auto my-10 p-8 border border-zinc-300 rounded-lg space-y-6 bg-white ";
export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement submission logic here, e.g., sending formData to backend
        console.log(formData); // For demonstration, log formData to console
        // Clear form fields after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className={containerClasses}>
            <h1 className="text-2xl font-bold text-center">Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <InputField type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                    <InputField type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                    <TextAreaField name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
                </div>
                <SubmitButton />
            </form>
        </div>
    );
};

const InputField = ({ type, name, placeholder, value, onChange }) => (
    <div>
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className={baseInputClasses} />
    </div>
);

const TextAreaField = ({ name, placeholder, value, onChange }) => (
    <div>
        <textarea name={name} rows="4" placeholder={placeholder} value={value} onChange={onChange} className={baseInputClasses}></textarea>
    </div>
);

const SubmitButton = () => (
    <button type="submit" className="w-full py-3 mt-4 bg-black text-white rounded-md hover:bg-gray-700 hover:text-white">
        Send Message
    </button>
);
