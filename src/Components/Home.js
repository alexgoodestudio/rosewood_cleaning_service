import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Why from "./Why"
import Mission from "./Mission";
import Services from "./Services";
import WaveBorder from "./Wave";
// import WaveRoller from "./WaveRoller"



function Home(){
    return(
        <div>
            <Opener/>            
            <ReviewMarquee/>
            <Mission/>
            {/* <WaveRoller/> */}
            <WaveBorder/>
            <Services/>    
            <Why/> 
            
        </div>
    )
}

export default Home;