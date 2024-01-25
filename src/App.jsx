import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import { CartProvider } from "./context/context";

export default function App() {
  return (
    <CartProvider>
      <LoginPage />
      <Header />
    </CartProvider>
  );
}
