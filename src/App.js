import { createBrowserRouter,RouterProvider } from "react-router-dom";
import CharactersDetail from "./components/CharactersDetail";
import HomePage from "./components/Home";
import RootPage from "./pages/Root";
function App() {
  const router=createBrowserRouter([
    {
      path:'/',element:<RootPage/>,children:[
        {
          index:true,element:<HomePage/>
        },
        {
          path:'characters',element:<CharactersDetail/>
        }

      ]
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
