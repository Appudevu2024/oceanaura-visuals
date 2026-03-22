import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Mylayout from "../layout/Mylayout";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import ContactPage from "../pages/ContactPage";
import GalleryPage from "../pages/GalleryPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mylayout />,
        errorElement:<h1>Error page</h1>,
        children: [
            
            {
                path: "",
                element: <HomePage/>,
            },
            {
                path: "about",
                element: <AboutPage/>,
            },
            {
                path: "contact",
                element: <ContactPage/>, 
            },
            {
                path: "services",
                element: <ServicesPage/>, 
            },
             {
                path: "gallery",
                element: <GalleryPage/>, 
            },
        ]
    },

]);