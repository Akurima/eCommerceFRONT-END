import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/style/ProductsCard.css";
import React, { useState } from "react";

const ProductCard = ({ products, onAddToCart }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  const cafes = products.filter(p => p.category?.toLowerCase() === "cafe");
  const dulces = products.filter(p => p.category?.toLowerCase() === "postres");
  const salados = products.filter(p => p.category?.toLowerCase() === "salados");
  const bebidas = products.filter(p => p.category?.toLowerCase() === "bebidas");

  const categorias = [
    { key: "todos", label: "Todos" },
    { key: "cafe", label: "Cafés" },
    { key: "postres", label: "Dulces" },
    { key: "salados", label: "Salados" },
    { key: "bebidas", label: "Bebidas" },
  ];

  // Función auxiliar para renderizar cada sección
  const renderSeccion = (titulo, lista) => (
    <div className="my-5 container">
      <h2 className="text-center mb-4 category-title" style={{ color: "#35564d" }}>{titulo}</h2>
      <div className="cards-container">
        {lista.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <button
                className="boton btn mt-auto"
                onClick={() => onAddToCart(product)}
              >
                Ordenar ☕
              </button>
              <button
                className="boton2 btn mt-2"
                onClick={() => onAddToCart(product)}
              >
                Saber más 👁‍🗨
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container my-4 text-center">
      {/* Título principal */}
      <p
        style={{
          fontWeight: "bold",
          fontSize: "3rem",
          color: "#35564d",
          display: "inline-block",
          boxShadow: "inset 0 -6px 0 0 #FFA73D",
        }}
      >
        Nuestro Menú
      </p>

      {/* Filtro pequeño a la derecha */}
      <div className="row justify-content-end my-3">
        <div className="col-auto text-end">
          <label
            htmlFor="categoriaSelect"
            className="form-label mb-1 fw-semibold"
            style={{ color: "#35564d", fontSize: "0.9rem" }}
          >
            Filtrar:
          </label>
          <select
            id="categoriaSelect"
            className="form-select form-select-sm w-auto filtro-estilizado"
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          >
            {categorias.map((cat) => (
              <option key={cat.key} value={cat.key}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Contenido según filtro */}
      {categoriaSeleccionada === "todos" && (
        <>
          {renderSeccion("Cafés", cafes)}
          {renderSeccion("Dulces", dulces)}
          {renderSeccion("Salados", salados)}
          {renderSeccion("Bebidas", bebidas)}
        </>
      )}

      {categoriaSeleccionada === "cafe" && renderSeccion("Cafés", cafes)}
      {categoriaSeleccionada === "postres" && renderSeccion("Dulces", dulces)}
      {categoriaSeleccionada === "salados" && renderSeccion("Salados", salados)}
      {categoriaSeleccionada === "bebidas" && renderSeccion("Bebidas", bebidas)}
    </div>
  );
};

export default ProductCard;
