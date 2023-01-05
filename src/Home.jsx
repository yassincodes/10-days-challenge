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
    <div style={{ display: "flex", justifyContent: "center" }}>
      {appData && appData[0].uid ? (
        <Link to="/challenges">
            <Button>see challenges</Button>
        </Link>
      ) : (
        <Link to="/challenges">
          <Button colorScheme="blue" onClick={signInWithGoogle}>
            Log in with google
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Home;
