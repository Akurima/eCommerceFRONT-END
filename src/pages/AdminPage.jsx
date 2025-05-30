import { useState, useEffect } from "react";
import { getCurrentUser } from "../auth/authService";
import { Link } from "react-router-dom";

const STORAGE_KEY = "cafeteria_products";

function AdminPage() {
  const user = getCurrentUser();
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", image: "" });
  const [editingId, setEditingId] = useState(null);

  if (!user) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">
          Acceso denegado. Solo usuarios logueados pueden ver esta página.
        </div>
        <Link to="/login" className="btn btn-primary">
          Iniciar sesión
        </Link>
      </div>
    );
  }

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setProducts(stored);
  }, []);

  const saveToStorage = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return;

    if (editingId) {
      const updated = products.map((p) =>
        p.id === editingId
          ? {
              ...p,
              name: form.name,
              price: parseFloat(form.price),
              image: form.image,
            }
          : p
      );
      setProducts(updated);
      saveToStorage(updated);
      setEditingId(null);
    } else {
      const newProduct = {
        id: Date.now(),
        name: form.name,
        price: parseFloat(form.price),
        image: form.image || "",
      };
      const updated = [...products, newProduct];
      setProducts(updated);
      saveToStorage(updated);
    }

    setForm({ name: "", price: "", image: "" });
  };

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    saveToStorage(updated);
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      price: product.price,
      image: product.image || "",
    });
    setEditingId(product.id);
  };

  const cancelEdit = () => {
    setForm({ name: "", price: "", image: "" });
    setEditingId(null);
  };

  return (
    <div className="container mt-4">
      <h2>Panel de Administración 🧑‍💼</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row g-2 align-items-end">
          <div className="col-md-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Precio</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              required
            />
          </div>
          <div className="col-md-5">
            <label className="form-label">URL de imagen</label>
            <input
              type="text"
              className="form-control"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-success w-100">
              {editingId ? "Actualizar" : "Agregar"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="btn btn-secondary w-100 mt-2"
              >
                Cancelar
              </button>
            )}
          </div>
        </div>
      </form>

      <h4>📋 Lista de productos</h4>
      <ul className="list-group">
        {products.map((p) => (
          <li
            key={p.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center gap-3">
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
                />
              )}
              <div>
                <strong>{p.name}</strong> — ${p.price.toFixed(2)}
              </div>
            </div>
            <div className="btn-group">
              <button
                className="btn btn-sm btn-warning"
                onClick={() => handleEdit(p)}
              >
                Editar
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(p.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPage;
