import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Products from "./components/Products";
import TopNavbar from "./components/TopNavbar";

function App() {
    return (
        <>
            <TopNavbar />
            <Navbar />
            <Hero />
            <Offer />
            <Products />
            <Footer />
        </>
    );
}

export default App;
