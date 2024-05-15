export default function About() {
    return (
        <div className={containerClass}>
            <div className="text-center">
          <h1 className={heading1Class}>About Us</h1>
          <h2 className={heading2Class}>Welcome to E-com World – Your Ultimate E-commerce Destination!</h2>
          <p className={paragraphClass}>
            At E-com World, we've curated a seamless and dynamic online shopping experience that transcends boundaries.
            Dive into a world where convenience meets variety, and where your every shopping desire is met with the click of a button.
            Our platform is designed to redefine the way you shop, connecting you with a vast array of products from the comfort of your home.
          </p></div>
    
          {/* Sections with specific content */}
        <Section
        title="Discover Endless Possibilities"
        text="Explore a diverse range of products, from fashion and electronics to home essentials and beyond. E-com World is your one-stop destination for all your needs. Whether you're looking for the latest trends in fashion, cutting-edge gadgets, or household necessities, our platform brings the world of e-commerce to your fingertips."
        imageUrl="/about1.jpg"
        imageAlt="Endless Possibilities"
        isImageOnLeft={true} // Image on the left
        />

        <Section
        title="User-Friendly Interface"
        text="Navigating through E-com World is a breeze. Our user-friendly interface ensures a smooth and enjoyable shopping experience for users of all levels of tech-savviness. Find what you need effortlessly, with intuitive search features and easy-to-navigate categories."
        imageUrl="/about2.png"
        imageAlt="User Friendly Interface"
        isImageOnLeft={false} // Image on the right
        />

        <Section
        title="Personalized Recommendations"
        text="Our platform goes beyond just selling products; it understands your preferences. Enjoy personalized recommendations based on your shopping history and preferences, making your E-com World experience truly unique. Discover new products and trends tailored just for you."
        imageUrl="/about3.jpeg"
        imageAlt="Personalized Recommendations"
        isImageOnLeft={true} // Image on the left
        />

        <Section
        title="Deals and Discounts"
        text="At E-com World, we believe in giving you more for less. Explore exciting deals, discounts, and exclusive offers that make your shopping experience not only enjoyable but also cost-effective. Stay updated on the latest promotions to make the most out of your purchases."
        imageUrl="/about4.jpg"
        imageAlt="Deals and Discounts"
        isImageOnLeft={false} // Image on the right
        />


        </div>
      );
    
}

const containerClass = 'max-w-screen-lg mx-auto px-4 mb-20';
const heading1Class = 'text-3xl font-bold text-zinc-800 mt-8 mb-6';
const heading2Class = 'text-2xl font-semibold text-black-800 mb-3';
const heading3Class = 'text-xl font-semibold text-zinc-800 mt-4 mb-4';
const paragraphClass = 'text-zinc-600 mb-4';
const imageClass = 'mb-4';

const Section = ({ title, text, imageUrl, imageAlt, index, isImageOnLeft }) => (
  <div className={`flex flex-wrap items-center pt-8`}>
   {isImageOnLeft ? (
    <>
      {imageUrl && (
      <div className="relative w-full md:w-1/3 md:pl-40">
        <img src={imageUrl} alt={imageAlt} className={`${imageClass} object-cover `} style={{ maxWidth: '200px', height: imageUrl === "/about2.png" ? '200px' : '170px', paddingTop: '4px', paddingLeft: '0px', zIndex: '10' }} />
      </div>
    )}
    <div className="w-full md:w-2/3 md:pl-4">
      <div className="bg-gray-100 p-4">
      <div className="md:pl-4">
        <h3 className={heading3Class}>{title}</h3>
        <p className={paragraphClass}>{text}</p></div>
      </div>
    </div>
  
  </>
) : (
<>
<div className="w-full md:w-2/3 md:pl-4">
      <div className="bg-gray-100 p-4 ">
      <div className="md:pr-4">
        <h3 className={heading3Class}>{title}</h3>
        <p className={paragraphClass}>{text}</p></div>
      </div>
    </div>
  
{imageUrl && (
<div className="relative w-full md:w-1/3 md:pr-8" >
        <img src={imageUrl} alt={imageAlt} className={`${imageClass} object-cover `} style={{ maxWidth: '200px', height: imageUrl === "/about2.png" ? '170px' : '170px', paddingTop: '4px', paddingRight: '0px', zIndex: '10' }} />
      </div>
    )}
    
  </>
  )}
  </div>
);
