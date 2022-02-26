import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginDialog from "./components/LoginDialog";
import ProductDetailPage from "./Pages/ProductDetailPage";
import CategoryLandingPage from "./Pages/CategoryLandingPage.";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/404" element={<PageNotFound />} />
        <Route exact path="/Login" element={<LoginDialog />} />
        <Route exact path="/Product" element={<ProductDetailPage />} />
        <Route exact path="/Category" element={<CategoryLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
