import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard";

export default function Saved() {
    const productsSaved=useSelector((state)=>state.saved.productsSaved)
    const data =useSelector((state)=>state.data.products);
    const products=data.filter((item)=>productsSaved.includes(item.id))
    return (
        <div className="container mx-auto h-screen">
        <div className=' grid grid-cols-4 gap-8'>
        {products.map(product => (
                                <ProductCard
                                    key={product?.id}
                                    id={product?.id}
                                    slug={product?.slug}
                                    imageSrc={product?.image}
                                    productName={product?.title}
                                    description={product?.description?.slice(0,47)}
                                    price={product?.price}
                                    
                                />
                            ))}
      </div>
      </div>
    )
}