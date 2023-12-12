import moduleName from "../../assets/aboteme2.jpg";

const AboutMe = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="lg:flex md:flex md:gap-10">
        <div className="">
          <div className="">
            <img
              className="lg:w-[160vh]  md:w-[150vh] sm:w-64 mt-[20vh] md:mt-20  ml-5 lg:mt-4 rounded-lg"
              src={moduleName}
              alt="photo"
            />
          </div>
        </div>
        <div className="mt-5 lg:ml-10 lg:mr-10 md:ml-[10vh]">
          <h2 className="lg:text-2xl text-xl"># About Me</h2>
          <h2>
            I am Arina Huque Rafa, a passionate web developer with 3 years of
            experience. I have a strong foundation in HTML, CSS,
            TailwindCSS,Bootstrap5 and JavaScript,React JS,Express js, MongoDB,
            Basic PHP, Photoshop,Illustrator,Figma, Content Writing and I enjoy
            creating visually appealing and user-friendly websites. My expertise
            lies in responsive design, ensuring that websites look great and
            function flawlessly across different devices and browsers.
          </h2>
          <h2 className="lg:mt-20 mt-4 text-xl font-sans">
            You can reach me in 3 ways. | Tech Lover | Positive Thinker |
            Motivator | Here is a little bit about me-
          </h2>
        </div>
      </div>
      <div className="mt-5">
        <div>
          <h2 className="text-3xl font-mono"># Work Experiance 👨‍💼</h2>
          <h2 className="text-2xl font-serif mt-4">
            * Full Stack Web Developer And Graphic Designer
          </h2>
          <h2 className="text-xl font-medium">⭐ Graphic Design Service -</h2>
          <h2>- Logo Design</h2>
          <h2>- Business card Design</h2>
          <h2>- Social Media Post Design</h2>
          <h2>- Ads Design</h2>
          <h2>- Brand identity Design etc</h2>
          <h2 className="text-xl font-medium">⭐ Web Development Service</h2>
          <h2>- Portfolio website.</h2>
          <h2>- Custom website build.</h2>
          <h2>- eCommerce website.</h2>
          <h2>- Business website.</h2>
          <h2>- Blog website.</h2>
          <h3>- Personal website.</h3>
          <h3>- Media website.</h3>
          <h3>- Event website.</h3>
        </div>
      </div>
      {/* skill */}
      <div className="mt-5">
        <div>
          <div>
            <h2 className="text-3xl font-mono">Skills</h2>
          </div>
          <div>
            <div className="">
              <h2 className="text-xl text-blue-600">Programming Languages :</h2>
              <h2>- Intermediate JavaScript</h2>
            </div>
            <div>
              <h2 className="text-xl text-blue-600">FrontEnd :</h2>
              <h2>React Js</h2>
              <h2> HTML </h2>
              <h2></h2>
            </div>
            <div>
              <h2 className="text-xl text-blue-600">User Interface</h2>
              <h2>Tailwind CSS</h2>
              <h2>Material UI </h2>
              <h2> CSS</h2>
              <h2>DaysiUI</h2>
            </div>
          </div>
        </div>
        {/* # Professional Courses 🚂 */}
        <div className="mt-5">
          <div>
            <h2 className="text-3xl mt-5 mb-2 font-serif text-blue-700">
              # Professional Courses 🚂
            </h2>
            <h2>
              - Complete Web Development Course with Jhankar Mahbub |
              Programming Hero
            </h2>
            <h2 className="text-3xl font-serif text-blue-700 mb-2 mt-5">
              # Co-Carriculam Activitics ✨
            </h2>
            <h2>- Research Technology, Motivator</h2>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-3xl font-serif text-blue-700 mb-2 mt-5">
              # Languages 🛬
            </h2>
            <h2>
              ● Bengali - Native | Fluent Speaking | Listening | Reading and
              Writing
            </h2>
            <h2>
              ● English - Fluent Speaking | Listening | Reading and Writing
            </h2>
            <h2>
              ● Hindi - Conversational | Speaking | Listening and Understanding
            </h2>
          </div>
        </div>
        {/* # Education  */}
        <div>
          <div className="">
            <h2 className="text-3xl mb-3 text-blue-700 font-serif mt-5"># Education 🧶</h2>
            <h2 className="mb-2 text-xl">
              ● Diploma in Engineering, Computer Science & Technology <br />
              <span className="font-normal">-  Infra
              Polytechnic Institute- Barishal, Passing Year: 2024, Result:
              Comming Soon</span>
            </h2>
            <h2 className="text-xl">
              ● Secondary School Certificate(SSC),Science  <br />
              <span className="font-normal">- Rahmatpur Secondary School-
              Barishal, Passing Year: 2020</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
