import SideBarNav from "./SideBarNav";

function OneTime(){
    return(
        <div className="py-5">
            <div className="row">
                <div className="col-lg-9 px-lg-5 px-4">
                <div className="row">
                    <h1 className="text-4xl">One Time Cleaning Service</h1>
                    <p className="text-md">One Time Cleaning Service is ideal for those who need a single,
                    thorough cleaning to refresh their home. It's perfect for special
                    occasions, seasonal cleaning, or just to give your space a reset.
                    This comprehensive service includes a detailed cleaning of all
                    rooms, focusing on hard-to-reach areas and ensuring every corner
                    sparkles. We use environmentally safe products, guaranteeing not
                    just a clean home but also one that's safe and healthy for you and
                    your family.</p>
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

export default OneTime;