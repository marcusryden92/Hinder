import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import Root from "./pages/Root";
import { Context } from "./context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/" element={<Root />}>
            <Route path="/MainPage" element={<MainPage />} />
            <Route path="/Matches" element={<Matches />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context>
  );
}
