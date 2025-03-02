import { useRoutes } from "react-router-dom"
import Layout from "../pages/Layout/Layout"
import Posts from "../pages/Posts/Posts"
import Home from "../pages/Home/Home"
import Edit from "../pages/Edit/Edit"
import Add from "../pages/AddEx/Add"
import Edu from "../pages/Addedu/Edu"
import Developer from "../pages/Developers/Developers"

function Router() {
  return (
    <>
    {
        useRoutes([
            {
                path: "/",
                element: <Layout/>,
                children: [
                  {
                    path: "/",
                    element: <Home/>
                  },
                  {
                    path: "/profiles",
                    element: <Developer/>
                  },
                  {
                    path: "/posts",
                    element: <Posts/>
                  },
                  {
                    path: "/edit-profile",
                    element: <Edit/>
                  },
                  {
                    path: "/add-experience",
                    element: <Add/>
                  },
                  {
                    path: "/add-education",
                    element: <Edu/>
                  },
                ]
            }
        ])
    }
    </>
  )
}

export default Router