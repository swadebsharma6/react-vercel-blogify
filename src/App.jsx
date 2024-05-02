import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";


const App = () => {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main/>
    }
  ])


  return (
    <RouterProvider router={routes}>
      <Main/>
    </RouterProvider>
  );
};

export default App;
