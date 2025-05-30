import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
// import AboutUs from "./components/AboutUs"; 
import ContactUs from "./components/ContactUs";
import ErrorComponent from "./components/ErrorComponent";
import RestroDetails from "./components/RestroDetails";
import Cart from "./components/Cart";
const AboutUs = lazy(() => import("./components/AboutUs"))
import { Provider } from 'react-redux'
import appStore from "./utils/appStore";

const AppLayout = () => {
  return (
    <Provider store = {appStore}>
      <div className="app-layout">
        <Header />
        <Outlet />
      </div>
    </Provider>
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
        element: <Suspense fallback={<h1>Loading.....</h1>}>< AboutUs /></Suspense>
        // element: <AboutUs />
      }, 
      {
        path: "/contact",
        element: < ContactUs />
      },
      {
        path: "/restroDetails/:resId",
        element: <RestroDetails />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: < ErrorComponent /> ,
  },
  
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
