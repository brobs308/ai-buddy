import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import NavBar from "./components/Navbar.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./Providers/AuthProvier.tsx";

const theme = extendTheme();
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
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
    </AuthProvider>
  </React.StrictMode>
);
