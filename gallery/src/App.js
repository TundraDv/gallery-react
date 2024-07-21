import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';

import GalleryView from "./views/galleryView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GalleryView />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
