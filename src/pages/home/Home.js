//components
import LargeCarousel from "../../components/largeCarousel/LargeCarousel";
import MainSlogan from "../../components/mainSlogan/MainSlogan";
import Perks from "../../components/perks/Perks";

//styles
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <MainSlogan />
      <Perks />
      <LargeCarousel />
    </div>
  );
}
