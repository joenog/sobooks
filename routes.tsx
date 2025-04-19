import { Layout } from "./src/components/Layout"
import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/home";
import Books from "./src/pages/books"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/books",
        element: <Books />
      }
    ]
  }
])
