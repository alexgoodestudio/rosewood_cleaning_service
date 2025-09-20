
import SideBarNav from "./SideBarNav";

function OneTime(){
    return(
        <div className="py-5">
            <div className="row">
                <div className="col-lg-10 px-lg-5 px-4">
                    <h1>One Time Cleaning Service</h1>
                    <p>One Time Cleaning Service is ideal for those who need a single,
                    thorough cleaning to refresh their home. It's perfect for special
                    occasions, seasonal cleaning, or just to give your space a reset.
                    This comprehensive service includes a detailed cleaning of all
                    rooms, focusing on hard-to-reach areas and ensuring every corner
                    sparkles. We use environmentally safe products, guaranteeing not
                    just a clean home but also one that's safe and healthy for you and
                    your family.</p>
                </div>
                <div className="col-lg-2">
                    <SideBarNav/>
                </div>

            </div>
        
        </div>
    )
}

export default OneTime;