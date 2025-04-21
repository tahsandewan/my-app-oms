import Home from "./components/Home";
import productDetails from "./components/ProduceDetails";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Home />,
  },
  {
    path: "/user/:id",
    element: <productDetails />,
  },
];

export default routes;