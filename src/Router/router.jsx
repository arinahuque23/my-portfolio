import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../ErrorPage/Error";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/ContactMe/Contact";


const router = createBrowserRouter([
            {
              path: "/",
              element: <MainLayout></MainLayout>,
              errorElement: <Error></Error>,
              children: [
                {
                  path : "/",
                  element: <Home></Home>
                },
                {
                  path: "/about",
                  element: <AboutMe></AboutMe>
                },
                {
                  path : "/projects",
                  element : <Projects></Projects>
                },
                {
                  path : "/contact",
                  element : <Contact></Contact>
                }
              ]
            },
          ]);

export default router;