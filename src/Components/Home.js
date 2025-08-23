import Opener from "./Opener";
import ReviewMarquee from "./ReviewMarquee";
import Mission from "./Mission"
import Bento from "./Bento"


function Home(){
    return(
        <div>
            <Opener/>
            <ReviewMarquee/>
            <Mission/>
            <Bento/>
        </div>
    )
}

export default Home;