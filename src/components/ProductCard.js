import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, savedProduct, unsavedProduct } from "../actions/Action";
import { Link } from "react-router-dom";

const productCardClasses = 'product-card';
const priceClasses = 'price';
const addToCartButtonClasses = 'add-to-cart-button ';
const ProductCard = ({id, imageSrc, productName, description, price,slug}) =>{ 
    // add product to cart
const dispatch=useDispatch()
const handleClick=()=>{
  dispatch(addToCart('MACBOOK AIR M2', 1040,  123466770,  'Black', 1,  'https://example.com/macbook.jpg','fgdgf'))

};
const productsSaved=useSelector((state)=>state.saved.productsSaved)
const [showFirstIcon, setShowFirstIcon] = useState(productsSaved.includes(id)?false:true);



const handleClickSeved = () => {
    setShowFirstIcon(prev=>{
        if(prev){
dispatch(savedProduct(id))
        }else dispatch(unsavedProduct(id))

     return !prev  
    });
};
    return(
    
        <div className={productCardClasses}>
<Link to={'/detailsProductsPage/'.concat(slug)}>
        <img src={imageSrc} alt={productName} className="product-image" />
        <h3 className="product-name text-wrap max-w-xs">{productName}</h3>
        <p className="product-description">{description}</p>
        <span className={priceClasses}>${price}</span>
         </Link>
        <div className="product-footer">
            <Link className={addToCartButtonClasses} onClick={handleClick} to={"/cart"}>Add To Cart</Link>
            <div >
            {showFirstIcon && (
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16" className="icon-save ml-2 w-8 h-8" onClick={handleClickSeved}>
                    <path fill="currentColor" d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"></path>
                </svg>
            )}
            {!showFirstIcon && (
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 45 45" className="icon-save ml-2 w-8 h-8" onClick={handleClickSeved} >
                    <path d="M23.9062 4.21875C23.9062 3.09987 24.3507 2.02681 25.1419 1.23564C25.9331 0.444474 27.0061 0 28.125 0L39.375 0C40.8668 0 42.2976 0.592632 43.3525 1.64752C44.4074 2.70242 45 4.13316 45 5.625V39.375C45 40.8668 44.4074 42.2976 43.3525 43.3525C42.2976 44.4074 40.8668 45 39.375 45H5.625C4.13316 45 2.70242 44.4074 1.64752 43.3525C0.592632 42.2976 0 40.8668 0 39.375V5.625C0 4.13316 0.592632 2.70242 1.64752 1.64752C2.70242 0.592632 4.13316 0 5.625 0L22.5 0C21.6169 1.17563 21.0938 2.63531 21.0938 4.21875V26.1366L13.6519 18.6919C13.5211 18.5611 13.3659 18.4574 13.1951 18.3867C13.0242 18.3159 12.8412 18.2795 12.6562 18.2795C12.4713 18.2795 12.2883 18.3159 12.1174 18.3867C11.9466 18.4574 11.7914 18.5611 11.6606 18.6919C11.5299 18.8226 11.4262 18.9778 11.3554 19.1487C11.2846 19.3195 11.2482 19.5026 11.2482 19.6875C11.2482 19.8724 11.2846 20.0555 11.3554 20.2263C11.4262 20.3972 11.5299 20.5524 11.6606 20.6831L21.5044 30.5269C21.635 30.6578 21.7902 30.7617 21.961 30.8326C22.1319 30.9035 22.315 30.94 22.5 30.94C22.685 30.94 22.8681 30.9035 23.039 30.8326C23.2098 30.7617 23.365 30.6578 23.4956 30.5269L33.3394 20.6831C33.6034 20.4191 33.7518 20.0609 33.7518 19.6875C33.7518 19.3141 33.6034 18.9559 33.3394 18.6919C33.0753 18.4278 32.7172 18.2795 32.3438 18.2795C31.9703 18.2795 31.6122 18.4278 31.3481 18.6919L23.9062 26.1366V4.21875Z" fill="#111111"/>
                </svg>
            )}
        </div>
        </div>
    </div>
   

)};


export default ProductCard;