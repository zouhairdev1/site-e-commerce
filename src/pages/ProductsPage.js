import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import '../styles.css';
import Products from '../components/Products';

import { Dialog } from '@radix-ui/react-dialog';
import PaginatedList from '../components/PaginatedList';
import { useSelector } from 'react-redux';

export default function ProductsPage() {
    const {search,categorySelected}=useSelector((state)=>{
        return state.search
    } );
   
    return (

        <> 
        {search||categorySelected!='All Categories'?
        <PaginatedList/>
        :
      <Products />
        }
        </>
        
   


    )
}

