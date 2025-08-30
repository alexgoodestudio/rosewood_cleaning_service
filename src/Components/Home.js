import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Section1 from "./Section1"
// import Bento from "./Bento"
import FooterMarquee from "./FooterMarquee"
import Mission from "./Mission";
import Section2 from "./Section2";



function Home(){
    return(
        <div>
            <Opener/>
            <Mission/>
            <ReviewMarquee/>
            <Section1/>  
            <Section2/>    
            <FooterMarquee/>
        </div>
    )
}

export default Home;