import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { About } from "../pages/About/About";
import { Home } from "../pages/Home/Home";
import { Leadership } from "../pages/leadership/leadership";
import OurProject from "../pages/ourProject/ourProject";
import { Products } from "../pages/Products/Products";
import "./router.scss";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Products />
      <OurProject />
      <Leadership/>
      <Footer />
    </>
  );
}

export default App;
