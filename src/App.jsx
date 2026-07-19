import React from "react";
import CreateId from "./pages/CreateId";
import AppRoutes from "./Routes/AppRoutes";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">

      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 bg-lime-400/10 blur-[150px] rounded-full" />

      <div className="relative z-10">
        <AppRoutes/>
      </div>
    </div>
  );
};

export default App;