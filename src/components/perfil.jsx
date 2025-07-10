import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../redux/authSlice";

const Perfil = () => {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  if (status === "loading")
    return <p className="text-center mt-5">Cargando perfil...</p>;
  if (error)
    return <p className="text-danger text-center mt-5">Error: {error}</p>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Mi perfil</h2>
      {user ? (
        <div className="card p-4 shadow">
          <p>
            <strong>Nombre:</strong> {user.firstname} {user.lastname}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      ) : (
        <p>No se encontraron datos del usuario.</p>
      )}
    </div>
  );
};

export default Perfil;
