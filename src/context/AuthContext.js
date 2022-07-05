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
    `${process.env.REACT_APP_API_URL}/place`
  );
  const [location, setLocation] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [date, setDate] = useState(null);
  const [room, setRoom] = useState(null);
  const [userInfos, setUserInfos] = useState(null);
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  useEffect(() => {
    const checkIfTokenValid = async () => {
      const token = localStorage.getItem("token");
      if (!token) return setIsAuthenticated(false);
      if (token) {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/user/verify`,
            { headers: { token: token } }
          );
          if (res.status === 200) {
            setIsAuthenticated(true);
            setUserInfos(res.data);
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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = e.target;
      const loginData = {
        email: email.value,
        password: password.value,
      };

      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/login`,
        loginData
      );

      const token = res.headers.authorization;
      //token im localStorage speichern
      localStorage.setItem("token", token);
      setUserInfos(res.data);
      console.log("jetzt user infos");
      setIsAuthenticated(true);
      console.log("jetzt authenticated");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        bookingUrl,
        setBookingUrl,
        location,
        setLocation,
        selectedSeat,
        setSelectedSeat,
        selectedMeeting,
        setSelectedMeeting,
        date,
        setDate,
        room,
        setRoom,
        userInfos,
        setUserInfos,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
