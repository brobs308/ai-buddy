import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import NavBar from "./components/Navbar.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const theme = extendTheme();
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        <div
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <NavBar />
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
