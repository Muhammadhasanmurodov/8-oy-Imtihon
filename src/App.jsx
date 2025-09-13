import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import RecipesDetail from "./pages/RecipesDetail";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },
        {
          path: "/recipesDetail/:id",
          element: <RecipesDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
