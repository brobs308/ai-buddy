import { createBrowserRouter } from "react-router-dom";
import Chat from "../components/Chat";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

export default router;
