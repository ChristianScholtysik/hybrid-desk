import { useState } from "react";
import { IonButton } from "@ionic/react";

function UploadAvatar() {
  const [fileData, setFileData] = useState();

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Handle File Data from the state Before Sending
    const data = new FormData();

    data.append("image", fileData);

    fetch("http://localhost:5000/single", {
      method: "POST",
      body: data,
    })
      .then((result) => {
        console.log("Profile Pic Uploaded");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={onSubmitHandler}>
          <input
            type="file"
            id="formFile"
            class="form-control"
            onChange={fileChangeHandler}
          />
          <br />
          <br />
          {/* <IonButton variant="primary" type="submit">
            Upload Profile Image
          </IonButton> */}
        </form>
      </div>
    </div>
  );
}

export default UploadAvatar;
