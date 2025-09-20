
import SideBarNav from "./SideBarNav";

function Recurring(){
    return(
        <div className=" py-5">
            <div className="row">
                <div className="col-lg-10 px-lg-5 px-4">
                    <h1>Recurring Cleaning Services</h1>
                    <p >
                    Our Recurring Cleaning service offers weekly, bi-weekly, or monthly
                    cleaning schedules to fit your lifestyle. It's designed for those
                    who desire continual cleanliness and order in their homes. This
                    service includes regular cleaning tasks such as dusting, vacuuming,
                    mopping, and bathroom sanitization, ensuring your home remains a
                    consistently clean and healthy environment. Our use of eco-friendly
                    products means each visit not only cleans but also protects your
                    home. Key Features: Regular and consistent home cleaning.
                    Customizable frequency – weekly, bi-weekly, or monthly. Maintenance
                    of cleanliness and hygiene over time. Use of environmentally safe
                    cleaning products.
                    </p>
                </div>
                <div className="col-lg-2">
                    <SideBarNav/>
                </div>
            </div>
        </div>
    )
}

export default Recurring;