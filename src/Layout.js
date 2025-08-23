import WebRoutes from "./WebRoutes";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function Layout(){
    return(
        <div>
            <Nav/>
            <WebRoutes/>
            <Footer/>
        </div>
    )
}

export default Layout;