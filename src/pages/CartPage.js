import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../actions/Action';


// Tailwind CSS classes grouped in constants for reused styles
const buttonBaseStyle = 'text-black px-4 py-2 rounded-md';
const flexSpaceBetween = 'flex justify-between';
const borderAndPadding = 'border-b pb-4';
export default function Cart() {
  return (
    <div className="bg-white-200 py-8">
      <div className="max-w-100 px-4 sm:px-6 lg:px-">
        <div className="grid-cart grid-cols-2">
          <div className="p-6 w-2/3">
          <h1 className="border-b-4 border-b6b2b2 text-3xl font-bold mb-6 pb-6">My Shopping Cart</h1>
            <ProductSection />
          </div>
          <div className="bg-c9c4c4-200 w-1/3">
            <Summary />
          </div>
        </div>
        
      </div>
    </div>
  );
};






const ProductSection = () => {
  const products = useSelector((state)=>state.cart.itemsCart);

  return (
    <div className="full">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-b6b2b2 text-lg font-semibold">
            <th className="p-4 text-left text-gray-400">Product</th>
            <th className="p-4 text-left text-gray-400">Price</th>
            <th className="p-4 text-left text-gray-400">Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

  
const ProductItem = (({ product }) => {
  const { name, price, id, qty, color, image } = product;
  //remove item in cart
  const dispatch=useDispatch()
  const handleClick=()=>{
    dispatch(removeFromCart(id))
  };
  return (
    <tr className="border-b">
      <td className="p-4 flex items-center">
        <img src={image} alt={name} className="w-14 h-15 mr-4 border-a5a3a3 border-2 rounded" />
        <div>
          <h2 className="font-semibold text-lg">{name}</h2>
          <p class="text-gray-500">ID: {id}</p>
          <p class="text-gray-500">Color: {color}</p>
          <p class="text-gray-500">Qty: {qty}</p>
          <div className="flex space-x-2 mt-2">
            <button onClick={handleClick} className={`bg-white text-black border border-a5a3a3 border-2 ${buttonBaseStyle} hover:bg-black hover:text-white hover:border-black`}>Remove</button>
            
            <button className={`bg-white text-black border border-a5a3a3 border-2 ${buttonBaseStyle} hover:bg-black hover:text-white hover:border-black`}>Edit</button>
          </div>
        </div>
      </td>
      <td className="p-4 font-semibold">{price}</td>
      <td className="p-4 font-semibold">${price* qty}</td>
    </tr>
  );
});


  

  const Summary = () => {
    return (
      <div className="h-screen bg-gray-50 py-8 px-15 ">
        <div className="px-6">
        <h2 className="text-lg font-semibold border-b-2 border-black pb-4 ">Summary</h2>
        <div className="mt-6">
          <div className="">
          <div className="pb-6">
            <label class="text-gray-500 font-semibold ">Do you have a promo code?</label></div>
            <div class="flex relative">
  <input id="promoCode" type="text" class="flex-grow border w-20 h-12 rounded-md px-3 py-1"/>
  <button class="absolute inset-y-0 right-0 bg-black text-white px-4 py-1 rounded-md hover:bg-gray-700">Apply</button>
</div>


          </div>
        </div>
  
        <div className="mt-6 ">
          <div className='border-t-2 border-black pb-4'></div>
          <div className={flexSpaceBetween}>
            <div className="text-lg font-semibold">
            <span>Subtotal</span></div>
            <span class="text-gray-500 font-semibold">$4160.00</span>
          </div>
          <div className={`${flexSpaceBetween} mt-2`}>
            <span class="text-gray-500 font-semibold">Shipping</span>
            <span class="text-gray-500 font-semibold">TBD</span>
          </div>
          <div className={`${flexSpaceBetween} mt-2`}>
            <span class="text-gray-500 font-semibold">Sales Tax</span>
            <span class="text-gray-500 font-semibold">TBD</span>
          </div>
        </div>
  
        <div className="mt-6 border-t-2 border-black  pt-4">
          <div className={`${flexSpaceBetween} font-bold`}>
            <span>Estimated Total</span>
            <span>$4160.00</span>
          </div>
        </div>
        <div className='mt-6 border-t-2 border-black pb-4'></div>
        <button className="bg-black text-white w-full py-3 mt-6 rounded-md hover:bg-gray-700">Checkout</button></div>
      </div>
    );
  };

