import Form from "./Form";

function Contact(){
    return(
        <div className=" bg-indigo-50 py-5 px-lg-0 px-4 mtm">
            <div className="container">
            <h2 className="text-4xl">Contact</h2>
            <p>Get in touch today and we will reach out for next steps about a quote, booking an appointment and more!</p>
            <Form/>
            </div>
        </div>
    )
}

export default Contact;