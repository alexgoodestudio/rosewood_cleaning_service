import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Why from "./Why"
import FooterMarquee from "./FooterMarquee"
import Mission from "./Mission";
import Services from "./Services";
import Contact from "./Contact";



function Home(){
    return(
        <div>
            <Opener/>            
            <ReviewMarquee/>
            <Mission/>
            <Services/>    
            <Why/>  
            <Contact/>
            <FooterMarquee/>
        </div>
    )
}

export default Home;