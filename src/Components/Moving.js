import SideBarNav from "./SideBarNav";

function Moving(){
    return(
        <div className="py-5">
            <div className="row">
                <div className="col-lg-9 px-lg-5 px-4">
                <div className="row">
                    <h1 className="text-4xl">Moving Cleaning Services</h1>
                    <p className="text-md">Our Moving In and Out Cleaning services are tailored for those
                    transitioning to a new home or vacating an old one. This service
                    ensures that your new space is pristine and welcoming or that your
                    previous home is left in impeccable condition. Our team will
                    thoroughly clean kitchens, bathrooms, living areas, and bedrooms,
                    focusing on areas often overlooked during regular cleaning. This
                    service not only aids in a stress-free move but also helps in
                    securing deposit returns for rentals.</p>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 rounded p-lg-5">
                        <h2 className="text-7xl text-slate-400">70%</h2>
                        <p className="text-md">Proper cleaning and disinfection can remove the majority of bacteria on household surfaces — studies report reductions ranging from about 50% up to over 90%, depending on methods used.</p>
                    </div>
                    <div className="col-lg-4 rounded p-lg-5">
                        <h2 className="text-7xl text-slate-400">75%</h2>
                        <p className="text-md">HEPA vacuuming and professional steam cleaning can substantially lower common allergens — studies report reductions of roughly 60–85% in carpet dust and dust-mite allergens depending on the method used.</p>
                    </div>
                    <div className="col-lg-4 rounded p-lg-5">
                        <h2 className="text-7xl text-slate-400">99%</h2>
                        <p className="text-md">When EPA-registered disinfectants are used exactly as directed, they can inactivate many viruses on high-touch surfaces (products are often tested and labeled to show &gt;99% reduction for the listed pathogens).</p>
                    </div>
                </div>

                </div>
                <div className="col-lg-3">
                    <SideBarNav/>
                </div>
                </div>
        
        </div>
    )
}

export default Moving;