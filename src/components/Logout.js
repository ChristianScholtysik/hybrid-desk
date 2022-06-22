import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Logout = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleClick = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  return (
    //Wenn angemeldet, Logout Button zeigen, der local Storage cleart & isAuthenticated zu false setzt
    //Wenn nicht angemeldet, entsprechenden Text zeigen
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
