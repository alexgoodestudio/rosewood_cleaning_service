import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Section1 from "./Section1"
// import Bento from "./Bento"
import FooterMarquee from "./FooterMarquee"
import Mission from "./Mission";
import Services from "./Services";



function Home(){
    return(
        <div>
            <Opener/>
            
            <Mission/>
            <ReviewMarquee/>
            <Section1/>  
            <Services/>    
            <FooterMarquee/>
        </div>
    )
}

export default Home;