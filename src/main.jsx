import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./contexts/authContext";
import { DataContextProvider } from "./contexts/dataContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataContextProvider>
        <ChakraProvider>
          <Router>
            <App />
          </Router>
        </ChakraProvider>
      </DataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
