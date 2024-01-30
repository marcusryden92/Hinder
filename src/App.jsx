import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MainPage from "./pages/MainPage";
import Root from "./pages/Root";
import { Context } from "./context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthenticationProvider } from "./context/AuthenticationContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <Context>
          <Routes>
            <Route index element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/MainPage" element={<Root />}>
              <Route index element={<MainPage />} />
            </Route>
          </Routes>
        </Context>
      </AuthenticationProvider>
    </BrowserRouter>
  );
}
