import { useState, useContext } from "react";
import firebase from "../firebase";
import { dataContext } from "../contexts/dataContext";
import { Input, Button } from "@chakra-ui/react";


function ChooseUsername() {
  const { dataCenter, usernames, theUsernames } = useContext(dataContext);

  // declaring the username state and creating it
  const [theUsername, setTheUsername] = useState("");

  function createAUsername() {
    console.log(
      usernames && dataCenter && theUsername.match("^[A-Za-z0-9_]+$")
    );
    if (usernames && dataCenter && theUsernames.includes(theUsername)) {
      alert("that username exists");
    } else if (theUsername.toUpperCase() === "ADMIN") {
      alert("sorry, you can't use that username");
    } else if (theUsername.length > 18) {
      alert("username should not be longer then 18 characters");
    } else if (
      usernames &&
      dataCenter &&
      theUsername.match("^[A-Za-z0-9_]+$")
    ) {
      firebase
        .database()
        .ref(localStorage.getItem("this_uid") + "/" + "user_info_section_2")
        .set({
          username: theUsername,
        });
      firebase
        .database()
        .ref(theUsername + "/" + "user_info")
        .set({
          username: theUsername,
          uid: dataCenter[0].uid,
          displayName: dataCenter[0].displayName,
          bio: dataCenter[0].bio,
          photoURL: dataCenter[0].photoURL,
          email: dataCenter[0].email,
        }) &&
        firebase
          .database()
          .ref("usernames" + "/" + theUsername)
          .set({
            username: theUsername,
            photoURL: dataCenter[0].photoURL
          });
    } else {
      alert("username should only contain characters and numbers");
    }
  }

  return (
    <div className="username_page">
      <div className="username_page_modal">
        <div className="username_page_modal_header">we are almost done, just choose a username :)</div>
        <div>
          <Input
            placeholder="your username"
            onChange={(e) => setTheUsername(e.target.value)}
            value={theUsername}
          />
          <Button
            colorScheme={"purple"}
            onClick={createAUsername}
            className="create_my_account_button"
          >
            create my account
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChooseUsername;
