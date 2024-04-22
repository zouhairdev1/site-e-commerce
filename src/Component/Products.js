import React from 'react';
import '../styles.css'; 
import { useState, useRef } from 'react';

const buttonClasses = 'button1';
const productCardClasses = 'product-card';
const priceClasses = 'price';
const addToCartButtonClasses = 'add-to-cart-button';

const ProductCard = ({ imageSrc, productName, description, price }) => (
    <div class={productCardClasses}>
        <img src={imageSrc} alt={productName} class="product-image" />
        <h3 class="product-name">{productName}</h3>
        <p class="product-description">{description}</p>
            <span class={priceClasses}>${price}</span> 
            <div class="product-footer">
            <button class={addToCartButtonClasses}>Add To Cart</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="icon-save ml-2 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v18h18V9.382l-6-6H5a2 2 0 00-2 2v14M15 3v5h5M11 17H7v4h10v-4h-4z" />
                </svg>
        </div>
    </div>
);


const Products = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            imageSrc: 'https://placehold.co/300x300',
            productName: 'SAMSUNG GALAXY S23 ULTRA',
            description: 'Learn about hosting built for scale and reliability',
            price: 1040
        },
        {
            id: 1,
            imageSrc: 'https://placehold.co/300x300',
            productName: 'SAMSUNG GALAXY S23 ULTRA',
            description: 'Learn about hosting built for scale and reliability',
            price: 1040
        },
        {
            id: 2,
            imageSrc: 'https://placehold.co/300x300',
            productName: 'IPHONE 15 PRO MAX',
            description: 'Learn about hosting built for scale and reliability',
            price: 1040
        },
        {
            id: 3,
            imageSrc: 'https://placehold.co/300x300',
            productName: 'MACBOOK AIR M2',
            description: 'Learn about hosting built for scale and reliability',
            price: 1040
        }
    ]);
     // Ref for the scroll container
     const scrollContainerRef = useRef(null);

     // Function to handle scroll on button click
     const handleScroll = (scrollOffset) => {
         if (scrollContainerRef.current) {
             scrollContainerRef.current.scrollLeft += scrollOffset;
         }
     };
 

    return (
        <div class="container1">
            <h2 class="title1">Categorie Electronic</h2>
            <div class="content1"><input type="checkbox" id="scrollLeft" class="scroll-checkbox" />
    <label for="scrollLeft" class={buttonClasses}></label>
                <button class={buttonClasses} onClick={() => handleScroll(-100)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div class="scroll-container" ref={scrollContainerRef}>
                <div class="grid">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            imageSrc={product.imageSrc}
                            productName={product.productName}
                            description={product.description}
                            price={product.price}
                        />
                    ))}
                </div></div><input type="checkbox" id="scrollRight" class="scroll-checkbox" />
    <label for="scrollRight" class={buttonClasses}></label>
                <button class={buttonClasses} onClick={() => handleScroll(100)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Products;
