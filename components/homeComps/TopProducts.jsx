import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  { periodo: 1, Caramel: 180.0, Latte: 150.0, Mocha: 200.0 },
  { periodo: 2, Caramel: 186.1, Latte: 155.7, Mocha: 206.59 },
  { periodo: 3, Caramel: 177.25, Latte: 140.67, Mocha: 217.13 },
  { periodo: 4, Caramel: 176.9, Latte: 142.35, Mocha: 204.43 },
  { periodo: 5, Caramel: 168.43, Latte: 139.37, Mocha: 216.37 },
];

const TopProducts = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Historial de Precios</h2>

      <div className="table-responsive mb-5">
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>Periodo</th>
              <th>Caramel Macchiato</th>
              <th>Classic Latte</th>
              <th>Mocha Vainilla</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.periodo}</td>
                <td>${row.Caramel.toFixed(2)}</td>
                <td>${row.Latte.toFixed(2)}</td>
                <td>${row.Mocha.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="periodo" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Caramel" stroke="#FFA73D" />
          <Line type="monotone" dataKey="Latte" stroke="#35564d" />
          <Line type="monotone" dataKey="Mocha" stroke="#6f42c1" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopProducts;
