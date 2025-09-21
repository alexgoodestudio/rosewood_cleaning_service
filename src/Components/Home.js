import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Why from "./Why"
import Mission from "./Mission";
// import Services from "./Services";
import ServicesNew from "./ServicesNew";
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
            {/* <Services/>    */}
            <ServicesNew/>   
            <Why/> 
            
        </div>
    )
}

export default Home;