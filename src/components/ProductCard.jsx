import { useNavigate } from "react-router-dom";
import "../styles/product-card.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="product-card__header">
        <h3>{product.name}</h3>
        <span className={`status ${product.status.toLowerCase()}`}>
          {product.status}
        </span>
      </div>

      <p className="producer">Declared by {product.producer}</p>

      <div className="meta">
        <span>{product.category}</span>
        <span>Updated {product.updatedAt}</span>
      </div>
    </div>
  );
}
