import { Link } from "react-router-dom";

const Projects = () => {
  // State to store the fetched projects

  return (
    <div className="mb-[10vh] mt-10">
      <h2 className="text-4xl mb-5">🎗 Projects :</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-5 mr-10  md:gap-[19vh] ">
        <div>
          <div className="lg:w-64 w-60  p-3 flex flex-col gap-1 relative h-[70vh] border">
            <div className="duration-500 h-48 bg-gradient-to-bl relative group">
              <img
                className="h-[60vh]"
                src="https://i.ibb.co/q0BSbxm/screencapture-last-projects-b8-web-app-2023-12-13-01-45-31.png"
                alt=""
              />
              <div className="absolute ml-[10vh] mt-5 flex items-end justify-end lg:opacity-[20vh] group-hover:opacity-100 transition-opacity">
                <Link to="https://last-projects-b8.web.app" target="_blank">
                <h2 className="btn text-center">Live Link</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="lg:w-64 w-60 p-3 flex flex-col gap-1 relative h-[70vh] border">
            <div className="duration-500  h-40 bg-gradient-to-bl md:h-[70vh] hover:contrast-100">
              <img
                className="h-[60vh]"
                src="https://i.ibb.co/jR7Nxwf/screencapture-all-brands-clients-web-app-2023-12-13-02-37-32.png"
                alt=""
              />
              <div className="absolute ml-[10vh] mt-5 flex items-end justify-end opacity-[20vh] group-hover:opacity-100 transition-opacity">
               <Link to="https://all-brands-clients.web.app" target="_blank">

                <h2 className="btn text-center">Live Link</h2>
               </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="lg:w-64 w-60  p-3 flex flex-col gap-1 relative h-[70vh] border">
            <div className="duration-500  h-48 bg-gradient-to-bl   hover:contrast-100">
              <img
                className="h-[60vh] ml-6"
                src="https://i.ibb.co/kDM3txR/screencapture-the-events-managements-web-app-2023-12-13-02-39-57.png"
                alt=""
              />
              <div className="absolute ml-[10vh] mt-5 flex items-end justify-end opacity-[20vh] group-hover:opacity-100 transition-opacity">
               <Link to="https://the-events-managements.web.app" target="_blank">
               
                <h2 className="btn text-center">Live Link</h2>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
