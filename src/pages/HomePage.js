import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Products from "../components/Products";

export default function HomePage() {
  return (
    <div>
      <MainContent />
      <Products />
      <Feedback />
    </div>
  );
}
