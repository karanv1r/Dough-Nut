import "../../App.css";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();
  if (localStorage.getItem("user") === null) {
    history.push({
      pathname: "/",
    });
  }
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
export default Home;
