// import Accordion from "../components/Accordion/Accordion";
import Index from "../components/Index/Index";
import Footer from "../components/Layout/components/Footer/Footer";
import Header from "../components/Layout/components/Header/Header";

// DISPLAY COMPONENT OR YOU CAN CALL (MAIN PAGE "/")

// ALL THE COMPONENTS ARE BEING CALLED HERE AND IS DISPLAYED ON PAGE

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <Header />
      <Index />
      <Footer />
    </div>
  );
}
