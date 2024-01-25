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
          <Route path="/" element={<Root />}>
            <Route index element={<LoginPage />} />
            <Route path="/MainPage" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context>
  );
}
