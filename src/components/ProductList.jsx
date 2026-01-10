import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
import products from "../data/products";
import "../styles/product-list.css";

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.producer.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = status ? product.status === status : true;

    return matchesSearch && matchesStatus;
  });

  return (
    <section className="product-list">
      <div className="product-list__controls">
        <SearchBar search={search} setSearch={setSearch} />
        <Filters status={status} setStatus={setStatus} />
      </div>

      <div className="product-list__grid">
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="product-skeleton" />
          ))}

        {!loading && filteredProducts.length === 0 && (
          <div className="empty-state">
            <h3>No disclosures found</h3>
            <p>
              Try adjusting your search or filters to view available
              product disclosures.
            </p>
          </div>
        )}

        {!loading &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
}
