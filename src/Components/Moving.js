import SideBarNav from "./SideBarNav";


function Moving(){
    return(
        <div className="py-5">
            <div className="row">
                <div className="col-lg-10 px-lg-5 px-4">
                    <h1>Moving Cleaning Services</h1>
                    <p >
                    Our Moving In and Out Cleaning services are tailored for those
                    transitioning to a new home or vacating an old one. This service
                    ensures that your new space is pristine and welcoming or that your
                    previous home is left in impeccable condition. Our team will
                    thoroughly clean kitchens, bathrooms, living areas, and bedrooms,
                    focusing on areas often overlooked during regular cleaning. This
                    service not only aids in a stress-free move but also helps in
                    securing deposit returns for rentals.
                    </p>
                </div>
                <div className="col-lg-2">
                    <SideBarNav/>
                </div>
            </div>
        </div>
    )
}

export default Moving;