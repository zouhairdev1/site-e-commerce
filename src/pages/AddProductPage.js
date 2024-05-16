import React, { useState,useRef } from 'react';
// Constants for class names used multiple times
const inputBaseClasses = "rounded-lg border border-gray-300 font-semiblod p-2 w-full h-14 ";
const labelBaseClasses = "block text-sm font-medium text-black mb-1";
const inputBaseClasses2 = "rounded-lg border border-gray-300 font-semiblod p-2 w-full h-40 ";

// Main component
export default function AddProduct() {
    // States for the input values
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Category 1');
    const [weight, setWeight] = useState('');
    const [hasVariations, setHasVariations] = useState(false);
    const [hasPromo, setHasPromo] = useState(false);

    // Handle input changes
    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
    };

    // Submission of form
    const handleSubmit = () => {
        // Logic to submit the form data
        console.log({ title, price, description, category, weight, hasVariations, hasPromo });
    };

    return (
        <div className="max-w-full mx-auto p-6 bg-white">
           <div className="max-w-full mx-auto p-6 bg-white rounded-lg border border-gray-300 shadow-md">
                <h2 className="text-3xl font-bold mb-6">Add New Product</h2>
                <p className="mb-4 text-zinc-500">Get started selling your physical product by adding your product details below</p>
            </div>

            {/* Form fields for title and price */}
            <div className="grid grid-cols-2 gap-6 mt-6">
    <div className="w-full max-w-md">
        <InputField id="title" label="Title" placeholder="Your product title..." onChange={handleInputChange(setTitle)} />
    </div>
    <div className="w-full max-w-md ml-auto">
        <PriceInputField price={price} setPrice={setPrice} />
    </div>
</div>


            <ImageUploadSections />

            <TextareaField id="description" label="Description" placeholder="Type your description here..." onChange={handleInputChange(setDescription)} />

            {/* Category and weight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="w-full max-w-md">
                <SelectField id="category" label="Categories" value={category} onChange={handleInputChange(setCategory)} />
                </div>
                <div className="w-full max-w-md ml-auto">
                <WeightInputField weight={weight} setWeight={setWeight} />
                </div>
            </div>

            <VariationAndPromoChecks 
                hasVariations={hasVariations} 
                setHasVariations={setHasVariations} 
                hasPromo={hasPromo} 
                setHasPromo={setHasPromo} 
            />

<button className="bg-black hover:bg-gray-700 text-white py-2 px-4 rounded-lg w-full sm:w-auto block mx-auto" onClick={handleSubmit}>Add Product</button>

        </div>
    );
}

// Smaller sub-components for cleaner code
function InputField({ id, label, type="text", placeholder, onChange }) {
    return (
        <div>
            <label htmlFor={id} className={labelBaseClasses}>{label}</label>
            <input type={type} id={id} name={id} placeholder={placeholder} className={inputBaseClasses} onChange={onChange} />
        </div>
    );
}

function PriceInputField({ price, setPrice }) {
    return (
        <div>
            <label htmlFor="price" className={labelBaseClasses}>Price</label>
            <div className="flex">
                <div className="bg-black p-2 text-white rounded-l-lg w-20 flex justify-center items-center">$</div>
                <input type="number" id="price" name="price" step="0.01" placeholder="0.00" className={`${inputBaseClasses} rounded-l-none`} value={price} onChange={e => setPrice(e.target.value)} />
            </div>
        </div>
    );
}

function ImageUploadSections() {
    const imagePlaceholder = "/uploadimage.png";
    return (
        <div className="grid grid-cols-2 gap-6 mt-6">
            <ImageUploadSection title="Main Images" imageSrc={imagePlaceholder} />
            <div className="ml-auto">
            <ImageUploadSection title="More Images" imageSrc={imagePlaceholder} /></div>
        </div>
    );
}


function ImageUploadSection({ title, imageSrc }) {
    const inputFileRef = useRef(null);

    const handleUploadClick = () => {
        inputFileRef.current.click();
    };

    const handleFileChange = (e) => {
        // Handle file upload logic here
        console.log('File uploaded:', e.target.files[0]);
    };

    return (
        <div className="space-y-2">
            <h3 className="text-sm font-medium text-black">{title}</h3>
            <div className="border border-zinc-300 rounded-lg p-4 text-center w-80 h-60 flex flex-col justify-center items-center">
                <img className=" w-20 h-20 " src={imageSrc} alt="Upload placeholder" />
                <button className="ml-6 mt-6 flex items-center text-sm font-medium text-gray-400 border border-zinc-300 rounded-lg w-1/2 h-1/5" onClick={handleUploadClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 ml-4" viewBox="0 0 20 20">
                        <path fill="black" d="M8 12h4V6h3l-5-5l-5 5h3zm11.338 1.532c-.21-.224-1.611-1.723-2.011-2.114A1.503 1.503 0 0 0 16.285 11h-1.757l3.064 2.994h-3.544a.274.274 0 0 0-.24.133L12.992 16H7.008l-.816-1.873a.276.276 0 0 0-.24-.133H2.408L5.471 11H3.715c-.397 0-.776.159-1.042.418c-.4.392-1.801 1.891-2.011 2.114c-.489.521-.758.936-.63 1.449l.561 3.074c.128.514.691.936 1.252.936h16.312c.561 0 1.124-.422 1.252-.936l.561-3.074c.126-.513-.142-.928-.632-1.449" />
                    </svg>
                    Upload Image
                </button>
    
                <input 
                    type="file" 
                    ref={inputFileRef} 
                    onChange={handleFileChange} 
                    className="hidden" 
                    accept="image/*" 
                />
            </div>
        </div>
    );
    
}




function TextareaField({ id, label, placeholder, onChange }) {
    return (
        <div className="mt-6 mb-4">
            <label htmlFor={id} className={labelBaseClasses}>{label}</label>
            <textarea id={id} name={id} rows="4" placeholder={placeholder} className={inputBaseClasses2} onChange={onChange}></textarea>
        </div>
    );
}

function SelectField({ id, label, value, onChange }) {
    return (
        <div>
            <label htmlFor={id} className={labelBaseClasses}>{label}</label>
            <select id={id} name={id} className={inputBaseClasses} value={value} onChange={onChange}>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
            </select>
        </div>
    );
}

function WeightInputField({ weight, setWeight }) {
    return (
        <div>
            <label htmlFor="weight" className={labelBaseClasses}>Weight</label>
            <div className="flex">
            <div className="bg-black p-2 text-white rounded-l-lg w-20 flex justify-center items-center">KG</div>
                <input type="number" id="weight" name="weight" step="0.01" placeholder="0.00" className={`${inputBaseClasses} rounded-l-none`} value={weight} onChange={e => setWeight(e.target.value)} />
            </div>
        </div>
    );
}

function VariationAndPromoChecks({ hasVariations, setHasVariations, hasPromo, setHasPromo }) {
    return (
        <div className="mt-4 mb-6">
            <div className="flex items-center mb-4">
                <input type="checkbox" id="variations" className="p-4 text-blue-600 rounded" checked={hasVariations} onChange={() => setHasVariations(!hasVariations)} />
                <label htmlFor="variations" className="ml-2 text-sm text-zinc-700">This product has different variations (eg size, color, type)</label>
            </div>
            <div className="flex items-center">
                <input type="checkbox" id="promo" className="p-4 text-blue-600 rounded" checked={hasPromo} onChange={() => setHasPromo(!hasPromo)} />
                <label htmlFor="promo" className="ml-2 text-sm text-zinc-700">Do you have a promo code?</label>
            </div>
        </div>
    );
}
