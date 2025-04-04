import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Layout from "./pages/layout/Layout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Contact from "./pages/contacts/Contact";
import TerminalLoader from "./components/Custom-loader/Loader";
import Terminal from "./components/Terminal/Terminal";

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Projects = lazy(() => import("./pages/projects/Projects"));

const App: React.FC = () => {
  const [isloading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<TerminalLoader />}>
          <Layout />
        </Suspense>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: (
            // <Suspense fallback={<TerminalLoader />}>
            <Home />
            // </Suspense>
          ),
        },
        {
          path: "about-me",
          element: (
            <Suspense fallback={<TerminalLoader />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "projects",
          element: (
            <Suspense fallback={<TerminalLoader />}>
              <Projects />
            </Suspense>
          ),
        },
        {
          path: "contact-me",
          element: (
            <Suspense fallback={<TerminalLoader />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "terminal",
          element: (
            <Suspense fallback={<div> Loading...</div>}>
              {/* <Terminal /> */}
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    <>{isloading ? <TerminalLoader /> : <RouterProvider router={router} />}</>
  );
};

export default App;
