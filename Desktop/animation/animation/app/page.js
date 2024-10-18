import AnimationOnScroll from "./animate/page"
import Navbar from "./Navbar/page";
import InfoBar from "./InfoBar/page"
export default function Home() {
  return (
    <>
    <Navbar/>
    <InfoBar/>

    <AnimationOnScroll/>
    </>
  );
}
