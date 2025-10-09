import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Why from "./Why"
import Mission from "./Mission";
import ServicesNew from "./ServicesNew";
// import WaveBorder from "./Wave";




function Home(){
    return(
        <div>
            <Opener/>            
            <ReviewMarquee/>
            <Mission/>
            <ServicesNew/>   
            {/* <WaveBorder/> */}
            <Why/> 
            
        </div>
    )
}

export default Home;