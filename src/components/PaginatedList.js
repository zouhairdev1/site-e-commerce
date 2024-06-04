import React, { useState, useEffect } from 'react';
import PaginationDemo from './Pagination';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
const PaginatedList = () => {
  const data =useSelector((state)=>state.data.products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of items you want to display per page
  // Calculate the indices for slicing the data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const {search,categorySelected}=useSelector((state)=>{
    return state.search
} );
  function searchAndFilterProducts(products, keyword = null, filterCategory = null) {
    // Define a function to check if the product matches the search keyword
    function matchesKeyword(product) {
        if (!keyword) return true;
        const keywordLower = keyword.toLowerCase();
        return product.title.toLowerCase().includes(keywordLower) ||
               product.description.toLowerCase().includes(keywordLower) ||
               product.category.toLowerCase().includes(keywordLower);
    }

    // Define a function to check if the product matches the filter category
    function matchesCategory(product) {
        if (!filterCategory) return true;
        return product.category.toLowerCase() === filterCategory.toLowerCase();
    }

    // Filter products based on the keyword and category
    return products.filter(product => matchesKeyword(product) || matchesCategory(product));
}
let res=searchAndFilterProducts(data, search, categorySelected)
// Search for products with keyword and category'
const currentItems = res.slice(indexOfFirstItem, indexOfLastItem);
  // Change page
  const handleCurrentPage = (childData) => {
    
    setCurrentPage(childData);
  };
  return (
    <div className='container mx-auto w-5/6' >
      <h1>Paginated List</h1>
      <div className=' grid grid-cols-3 gap-8'>
        {currentItems.map(product => (
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
      <PaginationDemo
        itemsPerPage={itemsPerPage}
        totalItems={res.length}
        onClick={handleCurrentPage}
      />
    </div>
  );
};

export default PaginatedList;
