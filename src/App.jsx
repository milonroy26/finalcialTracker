import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Income from "./pages/Income";
import Expensive from "./pages/Expensive";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/income" element={<Income></Income>}></Route>
        <Route path="/expensive" element={<Expensive></Expensive>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
