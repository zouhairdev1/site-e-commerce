import Feedback from "../Component/Feedback";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import MainContent from "../Component/MainContent";
import Products from "../Component/Products";

export default function HomePage(){
    return(
        <div>
         <Header/>
         <MainContent/>
         <Products/>
         <Feedback/>
         <Footer/>
        </div>
       
    )
}