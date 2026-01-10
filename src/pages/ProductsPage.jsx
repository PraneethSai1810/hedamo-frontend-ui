import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import "../styles/page.css";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="page">
        <ProductList />
      </main>
    </>
  );
}
