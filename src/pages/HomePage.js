import { useEffect } from "react";
import axios from 'axios';
import Feedback from "../components/Feedback";
import MainContent from "../components/MainContent";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/Action";

export default function HomePage() {
 
  return (
    <div>
      <MainContent />
      <Products />
      <Feedback />
    </div>
  );
}
