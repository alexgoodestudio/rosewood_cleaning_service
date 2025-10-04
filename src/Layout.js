import WebRoutes from "./WebRoutes";
import Nav from "./Components/Nav";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import FooterMarquee from "./Components/FooterMarquee";
import ScrollToTop from "./Components/ScrollToTop";

function Layout(){
    return(
        <div>
            <Banner/>
            <Nav/>
            <ScrollToTop />
            <WebRoutes/>   
            <Contact/>
            <FooterMarquee/>        
            <Footer/>
        </div>
    )
}

export default Layout;