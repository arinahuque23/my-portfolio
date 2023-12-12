import banner from "../../assets/WhatsApp 0.jpg";

const Banner = () => {
  return (
    <div>
      <div className="lg:flex flex lg:gap-10">
        <div className="mt-5 ">
          <h2 className="lg:text-2xl mt-10 lg:ml-8 w-52  font-bold">
            Arina Huque Rafa
          </h2>
          <h2 className="lg:text-2xl    text-blue-600  mt-2 lg:ml-8 font-serif  ">
            Front-End Developer
          </h2>
          <h2 className="btn mt-5 ml-6">
            <a href="/images/https://i.ibb.co/L1Fwwph/1200x1800-Landscape-Sample.jpg" download="resume">
              <button> Download My Resume</button>
            </a>
          </h2>
        </div>
        <div className=" lg:ml-[55vh] ml-[2vh]">
          <div>
            <img
              className="lg:w-80 w-40 mt-4 rounded-full"
              src={banner}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
