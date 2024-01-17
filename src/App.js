import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import AddNewPerson from "./Pages/AddNewPerson";
import Retrieve from "./Pages/Retrieve";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <AddNewPerson />,
        },
        {
          path: "/retrieve",
          element: <Retrieve />,
        }
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
