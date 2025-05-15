import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import AboutUs from "./components/AboutUs"; 
import ContactUs from "./components/ContactUs";
import ErrorComponent from "./components/ErrorComponent";
import RestroDetails from "./components/RestroDetails";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: < AboutUs />
      }, 
      {
        path: "/contact",
        element: < ContactUs />
      },
      {
        path: "/restroDetails/:resId",
        element: <RestroDetails />
      }
    ],
    errorElement: < ErrorComponent /> ,
  },
  
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
