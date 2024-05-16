import { useState, useRef } from 'react';
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useSelector } from 'react-redux';
export default function DetailsProduct() {
  let {slug} =useParams()
  const selectorData=useSelector((state)=>state.data.products);
  let item= selectorData.find((item)=>item.id===Number(slug)  )
  console.log(item);
  return (
    <div className="bg-white">
      <div className="max-w-100 mx-auto px-6">
        <Header />
        <ProductDetails />
        <ClothingCategory />
        <RatingsReviews />
      </div>
    </div>
  );
}


const fullWidth = "w-1/15 px-6 py-2";
const roundedButton = "text-white px-1 py-1 rounded";
const roundedButton2 = "text-black px-1 py-1 rounded";

function Header() {
  return (
    <h1 className="text-3xl font-bold my-6">MEN'S PANTS By ZARA</h1>
  );
}

function ProductDetails() {
  return (
    <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-6">
      <ProductImages />
      <ProductInfo />
      
    </div>
  );
}


function ProductImages() {
  const [mainImage, setMainImage] = useState("https://placehold.co/400x500");
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleThumbnailClick = (imageUrl, index) => {
    setMainImage(imageUrl);
    setClickedIndex(index);
  };

  return (
    <div className="col-span-1">
      <div className="flex justify-center mb-4">
        {/* Thumbnail images */}
        <div className="gap-4 p-8">
          {Array(4).fill().map((_, index) => (
            <div key={index} className={`p-2 ${index === clickedIndex ? 'border-black' : ''}`}>
              <img
                src={`https://placehold.co/100`}
                alt="Product thumbnail"
                className="cursor-pointer rounded-lg"
                onClick={() => handleThumbnailClick(`https://placehold.co/400x500?text=Image${index + 1}`, index)}
              />
            </div>
          ))}
        </div>
        {/* Main product image */}
        <div className="">
          <img src={mainImage} alt="Main product image" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}



function ProductInfo() {
  return (
    <div className="w-full md:w-2/5 mt-6 md:mt-0">
      <PriceSection />
      <RatingReviews />
      <ColorSelection />
      <SizeSelection />
      <QtySelection />
      <PurchaseButtons />
      <DeliveryInfo />
      
      
    </div>
  );
}

function PriceSection() {
  return (
    <div className="flex justify-between items-baseline">
      <div className="text-4xl font-bold">$104.00</div>
      <div className="line-through">$208.00</div>
      <div className="text-white border-black bg-black rounded-lg w-10 px-1 py-1">50%</div>
    </div>
  );
}

function RatingReviews() {
  return (
    <div className="text-sm text-yellow-400 my-1">⭐⭐⭐⭐⭐ 12 reviews</div>
  );
}

function ColorSelection() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="mt-4">
      <label className="font-semibold">Color</label>
      <div className="flex space-x-2 items-center">
        <div
          className={`w-6 h-6 rounded-full cursor-pointer ${selectedColor === "black" ? "border-2 border-gray" : ""}`}
          style={{ backgroundColor: "black" }}
          onClick={() => handleColorClick("black")}
        ></div>
        <div
          className={`w-6 h-6 rounded-full cursor-pointer ${selectedColor === "zinc" ? "border-2 border-gray" : ""}`}
          style={{ backgroundColor: "zinc" }}
          onClick={() => handleColorClick("zinc")}
        ></div>
      </div>
    </div>
  );
}

function SizeSelection() {
  return (
    <div className="mt-4">
      <label className="font-semibold">Size</label>
      <select className="border border-zinc-300 rounded-md p-2 w-40 ml-4">
        <option>Please select</option>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
      <div></div>
    </div>
    
  );
}

function QtySelection() {

  return (
    <div className="flex items-center mt-4">
      <input
        type="number"
        className="w-16 text-center border-zinc-300 border rounded-md appearance-none"
      />
    </div>
  );
  
}


function PurchaseButtons() {
  return (
    <div className="mt-6 flex space-x-4">
      <button className={`bg-black hover:bg-gray-700 ${roundedButton} rounded-lg`} style={{ width: "120px", height: "40px" }}>Add To Cart</button>
      <button className={`bg-white text-black border-black border-2 hover:bg-black hover:text-white ${roundedButton2} rounded-lg`} style={{ width: "120px", height: "40px" }}>Buy Now</button>
      <IconSave />
    </div>
  );
}

function DeliveryInfo() {
  return (
    <div className="mt-6">
      <h3 className="font-semibold ml-2">Delivery</h3>
      <p className="font-semibold text-gray-500 mt-4">
  Free standard shipping on orders <span className='font-bold'>over $350</span> before tax, plus free returns
</p>

      <table className="w-full text-sm mt-4">
  <tbody>
  <tr className="border-b">
      <td className="py-2 text-gray-500">TYPE</td>
      <td className="text-gray-500">HOW LONG</td>
      <td className="text-gray-500">HOW MUCH</td>
    </tr>
    <tr className="border-b">
      <td className="py-2">Standard delivery</td>
      <td>1-4 business days</td>
      <td>$4.50</td>
    </tr>
    <tr className="border-b">
      <td className="py-2">Express delivery</td>
      <td>1 business day</td>
      <td>$10.00</td>
    </tr>
    <tr className="border-b">
      <td className="py-2">Pick up in store</td>
      <td>1-3 business days</td>
      <td>Free</td>
    </tr>
  </tbody>
</table>
<h3 className="font-semibold ml-2 mt-4">Return</h3>
      <p className="font-semibold text-gray-500 mt-4">
      You have <span className='font-bold'>60 days</span> to return the item(s) using any of the following methods:
</p>

        <ul className="list-disc pl-4 mt-4">
          <li>Free store return</li>
          <li>Free returns via USPS Dropoff Service</li>
        </ul>
      </div>
    
  );
}

function ClothingCategory() {
  const items = [
    { id: 1, name: "Men's Shoes", image: "https://placehold.co/140x200", price: "$1040", description: 'Learn about hosting built for '},
    { id: 2, name: "Men's Pants By ZARA", image: "https://placehold.co/140x200", price: "$1040", description: 'Learn about hosting built for ' },
    { id: 3, name: "T-Shirt Texture By ZARA", image: "https://placehold.co/140x200", price: "$1040", description: 'Learn about hosting built for ' },
  ];

  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold">Clothing Category</h2>
      <div className="relative overflow-hidden my-6 ">
        <button onClick={scrollLeft} className="absolute left-0 top-0 h-full  px-8 py-2 ">&lt;</button>
        <button onClick={scrollRight} className="absolute left-80 top-0 h-full  px-80 py-2 ">&gt;</button>
        <div ref={containerRef} className="flex overflow-x-auto space-x-4 p-8 px-20">
          {items.map(item => (
            <div key={item.id} className="w-40 bg-white border rounded-md shadow-sm ">
              <div className='flex flex-col items-center'>
              <img src={item.image} alt={item.name} className="w-40 h-40 object-cover " /></div>
              <div className="text-xs font-bold p-1">{item.name}</div>
              <div className="text-xs  p-1">{item.description}</div>
              <div className="text-sm font-bold p-1 ml-1">{item.price}</div>
              <div className="flex items-center">
              <Link className=" bg-black text-white text-xs px-2 py-1 ml-2 rounded hover:bg-gray-600 w-20 h-6" to="/detailsProductsPage">Add To Cart</Link>
            <IconSavesmall className=""/></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// icon Save
 function IconSave() {
    const [showFirstIcon, setShowFirstIcon] = useState(true);
  
    const handleClick = () => {
      setShowFirstIcon(false);
    };
    const handleClicktwo = () => {
      setShowFirstIcon(true);
    };
  
    return (
      <div>
        {showFirstIcon && (
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16" className="icon-save ml-2 w-8 h-8" onClick={handleClick}>
            <path fill="currentColor" d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"></path>
          </svg>
        )}
        {!showFirstIcon && (
         <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 45 45" className="icon-save ml-2 w-8 h-8" onClick={handleClicktwo} >
         <path d="M23.9062 4.21875C23.9062 3.09987 24.3507 2.02681 25.1419 1.23564C25.9331 0.444474 27.0061 0 28.125 0L39.375 0C40.8668 0 42.2976 0.592632 43.3525 1.64752C44.4074 2.70242 45 4.13316 45 5.625V39.375C45 40.8668 44.4074 42.2976 43.3525 43.3525C42.2976 44.4074 40.8668 45 39.375 45H5.625C4.13316 45 2.70242 44.4074 1.64752 43.3525C0.592632 42.2976 0 40.8668 0 39.375V5.625C0 4.13316 0.592632 2.70242 1.64752 1.64752C2.70242 0.592632 4.13316 0 5.625 0L22.5 0C21.6169 1.17563 21.0938 2.63531 21.0938 4.21875V26.1366L13.6519 18.6919C13.5211 18.5611 13.3659 18.4574 13.1951 18.3867C13.0242 18.3159 12.8412 18.2795 12.6562 18.2795C12.4713 18.2795 12.2883 18.3159 12.1174 18.3867C11.9466 18.4574 11.7914 18.5611 11.6606 18.6919C11.5299 18.8226 11.4262 18.9778 11.3554 19.1487C11.2846 19.3195 11.2482 19.5026 11.2482 19.6875C11.2482 19.8724 11.2846 20.0555 11.3554 20.2263C11.4262 20.3972 11.5299 20.5524 11.6606 20.6831L21.5044 30.5269C21.635 30.6578 21.7902 30.7617 21.961 30.8326C22.1319 30.9035 22.315 30.94 22.5 30.94C22.685 30.94 22.8681 30.9035 23.039 30.8326C23.2098 30.7617 23.365 30.6578 23.4956 30.5269L33.3394 20.6831C33.6034 20.4191 33.7518 20.0609 33.7518 19.6875C33.7518 19.3141 33.6034 18.9559 33.3394 18.6919C33.0753 18.4278 32.7172 18.2795 32.3438 18.2795C31.9703 18.2795 31.6122 18.4278 31.3481 18.6919L23.9062 26.1366V4.21875Z" fill="#111111"/>
         </svg>
         
        )}
      </div>
    );
  }

  function IconSavesmall() {
    const [showFirstIcon, setShowFirstIcon] = useState(true);
  
    const handleClick = () => {
      setShowFirstIcon(false);
    };
    const handleClicktwo = () => {
      setShowFirstIcon(true);
    };
  
    return (
      <div>
        {showFirstIcon && (
          <svg xmlns="http://www.w3.org/2000/svg" width="0.2em" height="0.2em" viewBox="0 0 20 20" className="icon-save ml-8 w-8 h-8" onClick={handleClick}>
            <path fill="currentColor" d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"></path>
          </svg>
        )}
        {!showFirstIcon && (
         <svg xmlns="http://www.w3.org/2000/svg" width="0.5em" height="0.5em" viewBox="0 0 55 55" className="icon-save ml-8 w-8 h-8" onClick={handleClicktwo} >
         <path d="M23.9062 4.21875C23.9062 3.09987 24.3507 2.02681 25.1419 1.23564C25.9331 0.444474 27.0061 0 28.125 0L39.375 0C40.8668 0 42.2976 0.592632 43.3525 1.64752C44.4074 2.70242 45 4.13316 45 5.625V39.375C45 40.8668 44.4074 42.2976 43.3525 43.3525C42.2976 44.4074 40.8668 45 39.375 45H5.625C4.13316 45 2.70242 44.4074 1.64752 43.3525C0.592632 42.2976 0 40.8668 0 39.375V5.625C0 4.13316 0.592632 2.70242 1.64752 1.64752C2.70242 0.592632 4.13316 0 5.625 0L22.5 0C21.6169 1.17563 21.0938 2.63531 21.0938 4.21875V26.1366L13.6519 18.6919C13.5211 18.5611 13.3659 18.4574 13.1951 18.3867C13.0242 18.3159 12.8412 18.2795 12.6562 18.2795C12.4713 18.2795 12.2883 18.3159 12.1174 18.3867C11.9466 18.4574 11.7914 18.5611 11.6606 18.6919C11.5299 18.8226 11.4262 18.9778 11.3554 19.1487C11.2846 19.3195 11.2482 19.5026 11.2482 19.6875C11.2482 19.8724 11.2846 20.0555 11.3554 20.2263C11.4262 20.3972 11.5299 20.5524 11.6606 20.6831L21.5044 30.5269C21.635 30.6578 21.7902 30.7617 21.961 30.8326C22.1319 30.9035 22.315 30.94 22.5 30.94C22.685 30.94 22.8681 30.9035 23.039 30.8326C23.2098 30.7617 23.365 30.6578 23.4956 30.5269L33.3394 20.6831C33.6034 20.4191 33.7518 20.0609 33.7518 19.6875C33.7518 19.3141 33.6034 18.9559 33.3394 18.6919C33.0753 18.4278 32.7172 18.2795 32.3438 18.2795C31.9703 18.2795 31.6122 18.4278 31.3481 18.6919L23.9062 26.1366V4.21875Z" fill="#111111"/>
         </svg>
         
        )}
      </div>
    );
  }
  
  




// Constants for Tailwind CSS class strings used frequently
const CONTAINER_STYLE = "border-b p-4 w-full";
const FLEX_CENTER_STYLE = "flex items space-x-2 mb-2";
const STAR_RATING_STYLE = "text-yellow-400";
const STAT_TEXT_STYLE = "text-sm text-zinc-600";

// Define smaller component for reviews
function Review({ name, date, content, imageProfile, imageProducts }) {
  return (
    <div className={CONTAINER_STYLE}>
      <div className={FLEX_CENTER_STYLE}>
        {imageProfile && <img src={imageProfile} alt={`${name}'s profile`} className="w-8 h-8 rounded-full" />}
        <span className="font-semibold ml-2">{name}</span>
        <span className={`text-zinc-500 ${STAT_TEXT_STYLE}`}>{date}</span>
      </div>
      <div className="flex items mb-4">
        <span className={STAR_RATING_STYLE}>⭐⭐⭐⭐⭐</span>
      </div>
      <p>{content}</p>
      {imageProducts && <img src={imageProducts} alt={`${name}'s profile`} className="w-20 h-20 rounded-lg p-4" />}
      <AddComment />
    </div>
  );
}

// Statistics component
function Stat({ value, description }) {
  return (
    <div>
      <p className="text-lg font-semibold">{value}</p>
      <p className={STAT_TEXT_STYLE}>{description}</p>
    </div>
  );
}

// Main component for Ratings and Reviews
function RatingsReviews() {
  // Sample data for reviews, could also be fetched from an API
  const reviews = [
    {
      id: 1,
      name: "Name",
      date: "Jan 24 2024",
      content: "La livraison a été effectuée à temps. La société s'assure de rendre un service de meilleure qualité avec un personnel serviable !",
      imageProfile: "path_to_image_url_here",
      imageProducts: "path_to_image_url_here"
    },
    // Add more reviews as needed
  ];

  return (
    <div className="max-w-xl ml-4"> {/* Changed mx-auto to ml-4 */}
      <h2 className="text-2xl font-semibold mb-4">Ratings & reviews</h2>
      <div className="space-y-4">
        {reviews.map(review => (
          <Review key={review.id} name={review.name} date={review.date} content={review.content} imageProfile={review.imageProfile} imageProducts={review.imageProducts} />
        ))}
      </div>
      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
          <Stat value="4/5" description="Store rating" />
          <Stat value="90.3%" description="On-time delivery rate" />
          <Stat value="≤4h" description="Response time" />
          <Stat value="$30,000+" description="Online revenue" />
        </div>
        <div className="flex space-x-4 mt-6 ">
          <button className={`bg-black hover:bg-gray-700  rounded-lg text-white text-xs px-1 py-1 rounded `} style={{ width: "150px", height: "40px" }}>View more products</button>
          <button className={`bg-white text-black border-black border-2 hover:bg-black hover:text-white text-xs rounded-lg`} style={{ width: "150px", height: "40px" }}>View profile</button>
        </div>
      </div>
    </div>
  );
}


////INPUT
function AddComment() {
  const [content, setContent] = useState("");
  const [stars, setStars] = useState(0); // Assuming default is 0 stars

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleStarsChange = (e) => {
    setStars(Number(e.target.value)); // Convert to number
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., save review to state or send to server
    console.log("Submitted review:", { content, stars });
    // Reset form fields
    setContent("");
    setStars(0);
  };

  const renderStarIcons = () => {
    const starIcons = [];
    for (let i = 1; i <= 5; i++) {
      starIcons.push(
        <FaStar
          key={i}
          className={i <= stars ? "text-yellow-400" : "text-gray-300"}
          onClick={() => setStars(i)}
        />
      );
    }
    return starIcons;
  };

  return (
    <div className="max-w-xl ml-4 mt-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          onChange={handleContentChange}
          placeholder="Enter review content"
          className="border border-gray-300 px-3 py-2 mb-2 w-full rounded-full"
        />
        <div className="flex items-center mb-4">
          
          {renderStarIcons()}
        </div>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded transition duration-200 hover:bg-gray-700">Submit Review</button>
      </form>
      <div className="space-y-4 mt-4">
        {/* Reviews */}
        {/* Reviews */}
        {/* Reviews */}
      </div>
    </div>
  );
}