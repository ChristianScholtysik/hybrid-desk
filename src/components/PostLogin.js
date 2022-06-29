import axios from "axios";
import { IonContent } from "@ionic/react";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";

import "./main.css";
const PostLogin = () => {
  //Wenn User authentifiziert, wird Header Component angezeigt
  //Wenn User nicht eingeloggt, zur Landing Page navigieren

  const [userInfo, setUserInfo] = useState(null);
  const { isAuthenticated } = useContext(AuthContext);

  const handleClick = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/info/me`, {
        headers: { token: token },
      });
      setUserInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <h1>Du bist eingeloggt und kannst buchen</h1>
          <button>hier lang</button>
          <button onClick={handleClick}>Userinfos anzeigen</button>
          {userInfo && (
            <>
              <p>Deine Id in der DB ist {userInfo._id}</p>
              <p>Deine Mailadresse ist {userInfo.email}</p>
            </>
          )}
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default PostLogin;
