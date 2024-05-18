import "./App.css";
import AppLayout from "./layouts/app-layout";
import Home from "./pages/home";
import Category from "./pages/category";
import SearchPage from "./pages/searchPage";
import SingleGifPage from "./pages/singleGifPage";
import Favorites from "./pages/favorites";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:catergory",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <SearchPage />,
      },
      {
        path: "/:type/:slug",
        element: <SingleGifPage />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
