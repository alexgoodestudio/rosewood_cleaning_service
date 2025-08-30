import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Section1 from "./Section1"
// import Bento from "./Bento"
import FooterMarquee from "./FooterMarquee"
import Mission from "./Mission";


function Home(){
    return(
        <div>
            <Opener/>
            <Mission/>
            <ReviewMarquee/>
            <Section1/>
            {/* <Bento/> */}
            <FooterMarquee/>
        </div>
    )
}

export default Home;