import React, { useState, useRef } from 'react';

import {  useSelector } from 'react-redux';
import '../styles.css';
import ProductCard from './ProductCard';


const buttonClasses = 'button1';




const Products = () => {
   

    const [categories, setCategories] = useState(useSelector((state)=>state.data.productsByCategore));
console.log(useSelector((state)=>state.data.productsByCategore));
    const scrollContainerRef = useRef(null);

    const handleScroll = (scrollOffset) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += scrollOffset;
        }
    };

    return (
        <div className="container1">
            {categories.map(category => (
                <div key={category.id}>
                    <h1 className="title1">Category: {category.name}</h1>
                    <div className="content1 flex items-center">
                        <button className={buttonClasses} onClick={() => handleScroll(-100)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className="scroll-container flex gap-4 overflow-x-hidden" ref={scrollContainerRef}>
                            {category.products.map(product => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    slug={product.slug}
                                    imageSrc={product.imageSrc}
                                    productName={product.productName}
                                    description={product.description}
                                    price={product.price}
                                />
                            ))}
                        </div>
                        <button className={buttonClasses} onClick={() => handleScroll(100)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};



export default Products;

