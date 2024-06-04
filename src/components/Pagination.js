import React, { useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function PaginationDemo({ itemsPerPage, totalItems, onClick }) {
 
  const [currentPage, setCurrentPage] = useState(1);
  const paginatePrev = () =>{
   
    setCurrentPage(prev=>{
      let rsp=prev>1?prev-1:1
    onClick(rsp);
    return rsp
    });
     
  } 
  const paginateNext = () =>{
     setCurrentPage(prev=>{
      let rep= prev<Math.ceil(totalItems / itemsPerPage)?prev+1:Math.ceil(totalItems / itemsPerPage)
      onClick(rep);
      return rep
     }
     );
     
     console.log(currentPage);
  }
  
  
  return (
    <>

    <Pagination>
      <PaginationContent>
        <PaginationItem>
          
  <PaginationPrevious  onClick={paginatePrev } />
          
        
        </PaginationItem>
        <PaginationItem>
          {currentPage}
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis  />
        </PaginationItem>
        <PaginationItem>
         
            <PaginationNext  onClick={paginateNext } />
          
          
        </PaginationItem>
      </PaginationContent>
    </Pagination> 
     </>
  )
}
