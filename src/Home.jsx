import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { authContext } from "./contexts/authContext";
import { Link } from "react-router-dom";
import { dataContext } from "./contexts/dataContext";

function Home() {
  const { signInWithGoogle } = useContext(authContext);
  const { appData } = useContext(dataContext);

  // when a user clicks on continue to admin
  // there will be a function that will
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "25px" }}>
      <div className="website_font">the 7 days challenge</div>
      <img height="40vh" src="https://media2.giphy.com/media/kmUvauX8TMWg0OsqKW/giphy.gif?cid=790b76116a07d5788fee383caf2c14c6be2adb7def34bb54&rid=giphy.gif&ct=g" alt="GIF" />
      <div>
        Welcome to our website, where you can participate in a variety of
        challenges designed to help protect the environment. From reducing your
        carbon footprint to supporting sustainable practices, there are many
        ways you can make a difference. Join us in taking action for a better
        future for all.
      </div>

      {appData && appData[0].uid ? (
        <Link to="/challenges">
          <Button colorScheme="green" style={{marginTop: "30px", marginBottom: "30px"}}>see challenges</Button>
        </Link>
      ) : (
        <Link to="/challenges">
          <Button colorScheme="green" style={{marginTop: "30px", marginBottom: "30px"}} onClick={signInWithGoogle}>
            Log in with google
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Home;
