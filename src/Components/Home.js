import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Why from "./Why"
import FooterMarquee from "./FooterMarquee"
import Mission from "./Mission";
import Services from "./Services";



function Home(){
    return(
        <div>
            <Opener/>            
            <ReviewMarquee/>
            <Mission/>
            <Services/>    
            <Why/>  
            <FooterMarquee/>
        </div>
    )
}

export default Home;