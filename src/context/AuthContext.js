import { useState, createContext, useEffect } from "react";
import axios from "axios";

//Wenn die Komponente initial mountet,
//checken, ob es einen token gibt
//wenn nein setIsAutheticated zu false setzen
//wenn ja,  req and die api schicken, setIsAutheticated zu true

export const AuthContext = createContext();

const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  //base URL um neue Reservierung anzulegen (soll POST request an diesen Endpunkt schicken)
  const [bookingUrl, setBookingUrl] = useState(
    `${process.env.REACT_APP_API_URL}/reservation`
  );
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const checkIfTokenValid = async () => {
      if (token) {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/user/verify`,
            { headers: { token: token } }
          );
          if (res.status === 200) {
            setIsAuthenticated(true);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setIsAuthenticated(false);
      }
    };
    checkIfTokenValid();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, bookingUrl, setBookingUrl }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
