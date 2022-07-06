import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./main.css";

const Logout = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleClick = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      {isAuthenticated ? (
        <button onClick={handleClick} className="btn btn-primary">
          Logout
        </button>
      ) : (
        <h1>Du bist nicht mehr angemeldet</h1>
      )}
    </div>
  );
};

export default Logout;
