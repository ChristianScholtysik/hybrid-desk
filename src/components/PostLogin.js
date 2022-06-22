import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PostLogin = () => {
  //Wenn User authentifiziert, Button für Userinfos anzeigen
  //onClick wird request an die protected Route der Api geschickt
  //mithilfe der Response werden ein paar Userinfos angezeigt
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
          <h1>
            Du bist jetzt eingeloggt und kannst den Downloadbereich nutzen
          </h1>
          <button onClick={handleClick} className="btn btn-primary">
            Userinfos anzeigen
          </button>
          {userInfo && (
            <>
              <p>Deine Id in der DB ist {userInfo._id}</p>
              <p>Deine Mailadresse ist {userInfo.email}</p>
            </>
          )}
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default PostLogin;
