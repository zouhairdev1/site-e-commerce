import { RouterProvider } from "react-router-dom";

import routes from "./router";
import ProviderStore from "./store/ProviderStore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "./actions/Action";
import axios from 'axios';

function App() {
  const dispatch = useDispatch()
   useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
  .then(response => {
   dispatch(getData(response.data)) ;
  })
  .catch(error => {
    console.error('Error fetching data: ', error);
  })
  .finally(() => {
    console.log('Finished fetching data');
  });
  })
  return <RouterProvider router={routes} /> ;
}

export default App;
