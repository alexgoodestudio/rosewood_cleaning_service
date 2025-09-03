import WebRoutes from "./WebRoutes";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";

function Layout(){
    return(
        <div>
            <Banner/>
            <Nav/>
            <WebRoutes/>
            <Footer/>
        </div>
    )
}

export default Layout;