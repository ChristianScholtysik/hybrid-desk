import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import { Header } from "./Header";
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
          <Header />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default PostLogin;
