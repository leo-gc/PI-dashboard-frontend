import { MainContainer } from "../components/MainContainer";
import { Navbar } from "../components/Navbar";
import { PopUpLogin } from "../components/PopUpLogin";

export default function Home() {
  return <>
    <Navbar />
    <MainContainer></MainContainer>
    <PopUpLogin />
  </>
}