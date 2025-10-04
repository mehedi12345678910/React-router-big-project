import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Home from "./Pages/Home";
import RootLayout from "./Components/Layouts/RootLayout";
import PlantDetails from "./Pages/PlantDetails";
import axios from "axios";
import LoadingSpinner from "./Components/LoadingSpinner";

const router = createBrowserRouter([
  // nested routing
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement:<LoadingSpinner/>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("https://openapi.programming-hero.com/api/plants"),
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/about",
        // element:<About></About>
        Component: About,
      },
      {
        path: "/plant-details/:id",
        Component: PlantDetails,
        loader: ({ params }) =>
          axios(`https://openapi.programming-hero.com/api/plant/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
