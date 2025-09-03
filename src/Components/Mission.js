import Image from "../Images/qwe.png";

function Mission() {
  return (
    <div className=" ">
      <div className="mission-body row">
        <div className="col-lg-1 col-12 "></div>
        <div className="col-lg-3 col-12 p-lg-5 p-4 me-lg-4">
          <img src={Image} alt="Clean Home" className="br" />
        </div>
       
        <div className="col-lg-4 col-12 ms-lg-5 p-lg-0 px-4">
          <h2 className=" text-4xl text-start mb-lg-4">
            Rosewood Cleaning Services
          </h2>
          <p className="text-lg text-start thin">
            {" "}
            At Rosewood Cleaning Services, we specialize in providing top-tier
            house cleaning that caters to the unique needs of each client,
            transforming your space into a pristine, welcoming environment. We
            pride ourselves on our commitment to eco-friendly cleaning
            practices, utilizing environmentally safe and sustainable products
            to ensure not only the cleanliness but also the health and safety of
            your home.
          </p>
          <p className="text-start mt-lg-5 text-sm bold">
             Columbia South Carolina
          </p>
        </div>
        <div className="col-lg-1 col-12 "></div>
      </div>
    </div>
  );
}

export default Mission;
