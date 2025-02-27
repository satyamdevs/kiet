import React from "react";
import CountdownTimer from "./CountdownTimer";
import Secretariats from "./Secretariats";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-950 text-white p-6">
      <CountdownTimer targetDate="2025-05-05T00:00:00" />
      <Secretariats />
    </div>
  );
}

export default App;
