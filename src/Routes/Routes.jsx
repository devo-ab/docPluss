import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Layouts/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
    ]
  },
]);

export default router;
