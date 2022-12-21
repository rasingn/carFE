import Counter from "./components/Games/Counter";
import Cars from "./components/Car/Cars";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import ColorPanel from "./components/Games/Color/ColorPanel";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="cars" element={<Cars />} />
        <Route path="game" >
          <Route path="counter" index element={<Counter />} />
          <Route path="color" element={<ColorPanel />} />
        </Route>
      </Route>
    )
    // [
    //   {path:'/'  ,element:<Cars/>},
    //   {path:'/counter'  ,element:<Counter/>}
    // ]
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
