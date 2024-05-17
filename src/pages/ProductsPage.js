import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import '../styles.css';

import Products from '../components/Products';
import Pagination from '../components/Pagination';
export default function ProductsPage() {
    return (
        <>
        <Products />
        <Pagination/>
        </>
    )
}

