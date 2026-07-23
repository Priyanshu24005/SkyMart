import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import "@fontsource/poppins";
import { Provider } from "./Context/AppContext.jsx";
import AppRoutes from "./Routes/AppRoutes.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <Provider>
    <AppRoutes/>
    <ToastContainer/>
    </Provider>
);
