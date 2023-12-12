
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../ContactMe/Contact";
import Email from "../Email/Email";
import Projects from "../Projects/Projects";


const Home = () => {
            
            return (
                        <div className="mt-10">
                                    <Banner></Banner>
                                    <AboutMe></AboutMe>
                                   <div className="mt-10">
                                   <Projects></Projects>
                                   </div>
                                   <div className="mb-10">
                                    <Email></Email>
                                   </div>
                                  <div className="mb-5">
                                  <Contact></Contact>
                                  </div>
                                  
                                    
                        </div>
            );
};

export default Home;