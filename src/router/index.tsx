import { createBrowserRouter } from "react-router-dom";
import Chat from "../components/Chat";
import App from "../App";
import ImageGenerator from "../components/Image";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/image",
    element: <ImageGenerator />,
  },
]);

export default router;
