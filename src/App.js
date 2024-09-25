import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 overflow-hidden">
          <iframe
            src="http://localhost:4848/single/?appid=C%3A%5CUsers%5Cprems%5CDocuments%5CQlik%5CSense%5CApps%5CNew%20Hospital%20Dashboard%202.qvf&sheet=yJbdca&theme=horizon&opt=ctxmenu,currsel"
            className="w-full h-full border-none"
            title="Qlik-dashboard"
          />
        </div>
      </div>
    </div>
  );
}

export default App;