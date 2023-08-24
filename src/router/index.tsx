import { createBrowserRouter } from "react-router-dom";
import Chat from "../components/Chat";
import App from "../App";
import ImageGenerator from "../components/Image";
import Builder from "../components/Builder";
import Analytics from "../components/Analytics";
import Login from "../components/Login";
import MediumSaver from "../components/MediumSaver";
import Protected from "./Private";
import Signup from "../components/SignUp";

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
  // {
  //   path: "/brief",
  //   element: <h1>Brief</h1>,
  // },
  {
    path: "/play",
    element: <Builder />,
  },
  {
    path: "analytics",
    element: <Analytics />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/mediumSaver",
    element: (
      <Protected>
        <MediumSaver />
      </Protected>
    ),
  },
]);

export default router;
