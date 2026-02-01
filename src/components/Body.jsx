
import Browse from "./Browse";
import Login from "./Login";
import { createHashRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  

  const appRouter = createHashRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
