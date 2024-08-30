import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home";
import SocketProvider from "./providers/Socket";

function App() {
  return (
    <>
      <Routes>
        <SocketProvider>
          <Route path="/" element={<Homepage />} />
        </SocketProvider>
      </Routes>
    </>
  );
}

export default App;
