import { IonPage, IonContent } from "@ionic/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import Header from "../components/Header";

// import "../components/main.css";
const PostLogin = () => {
  //Wenn User authentifiziert, wird Header Component angezeigt
  //Wenn User nicht eingeloggt, zur Landing Page navigieren

  //const [userInfo, setUserInfo] = useState(null);
  const { isAuthenticated, userInfos } = useContext(AuthContext);

  // const handleClick = async () => {
  //   const token = localStorage.getItem("token");
  //   console.log(token);
  //   try {
  //     const res = await axios.get(`${process.env.REACT_APP_API_URL}/info/me`, {
  //       headers: { token: token },
  //     });
  //     setUserInfos(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      {isAuthenticated ? (
        <IonPage>
          <Header />
          <IonContent>
            {userInfos.first_name}
            <br />
            {userInfos.last_name}
            <br />
            {userInfos.email}
            <br />
            <h1>Du bist eingeloggt und kannst buchen</h1>

            {/* <button onClick={handleClick}>Userinfos anzeigen</button>
              {userInfo && (
                <>
                  <p>Deine Id in der DB ist {userInfo._id}</p>
                  <p>Deine Mailadresse ist {userInfo.email}</p>
                </>
              )} */}
          </IonContent>
        </IonPage>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default PostLogin;
