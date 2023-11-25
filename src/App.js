// import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import Employee from "./Employee";
const routerPaths1 = createBrowserRouter([
  {
    path: "/",
    element: <MyNavbar />,
  },
  {
    path: "/employee",
    element: <Employee />,
  },
]);

function App() {
  return <RouterProvider router={routerPaths1} />;
}
export default App;
