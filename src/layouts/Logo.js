import { Outlet,Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Logo(params) {
    return (
        <>
         <div className=" container mx-auto  ">
        <Link className="text-xl text-black"to={'/'}>
          <img src="/logo.png" className=" mx-auto " />
        </Link>
        
      </div>
      
      <Outlet/>
      <Footer/>
        </>
       
    )
    
}