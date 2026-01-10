import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import products from "../data/products";
import "../styles/product-detail.css";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <main className="detail-page">
        <Link to="/" className="back-link">
          ← Back to products
        </Link>

        <h1>{product.name}</h1>
        <p className="producer">Declared by {product.producer}</p>

        {/* Disclosure Summary */}
        <section className="summary">
          <div>
            <span className="label">Disclosure status</span>
            <span>{product.status}</span>
          </div>
          <div>
            <span className="label">Last updated</span>
            <span>{product.updatedAt}</span>
          </div>
          <div>
            <span className="label">Evidence attached</span>
            <span>2 documents</span>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="disclaimer">
          This page presents <strong>producer-declared information</strong>.
          HEDAMO structures and displays this information and does not verify,
          certify, or approve the content.
        </div>

        {/* Version History */}
        <section className="versions">
          <h2>Version history</h2>

          <div className="version">
            <strong>Version 2</strong>
            <p>Updated sourcing information</p>
            <span>Published — 12 Sep 2025</span>
          </div>

          <div className="version">
            <strong>Version 1</strong>
            <p>Initial disclosure</p>
            <span>Submitted — 01 Sep 2025</span>
          </div>
        </section>
      </main>
    </>
  );
}
