import React from "react";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <CountdownTimer targetDate="2025-03-01T00:00:00" />
    </div>
  );
}

export default App;
