// Importamos React
import React from "react";

// Importamos las páginas que seran las redirreciones de nuestro router
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importamos las funciones necesarias para crear nuestro router en esta caso lo cree con React Router
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom";

// Creamos el layout que usa la funcionalidad Oulet renderizar contenido anidado dentro de las rutas principales
  const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
  }


//Creamos el router con las dirrecciones d ecada una de nuestras paginas
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/post/:id",
          element: <Single />,
        },
        {
          path: "/write",
          element: <Write />,
        }
      ]
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/single",
        element: <Single />,
    },
    {
        path: "/write",
        element: <Write />,
    },
  ]);

const App = () => {
    return (
        <div className="app">
            <div className="container">
              <RouterProvider router={router} />
            </div>
        </div>
    );
}

export default App;