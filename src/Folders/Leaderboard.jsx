import { useContext } from "react";
import RoutesSelector from "../Comps/RoutesSelector";
import { dataContext } from "../contexts/dataContext";
import { Avatar } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Leaderboard() {
  const { dataCenter, usernames, theUsernames } = useContext(dataContext);
  usernames && console.log(usernames);

  return (
    <div className="App">
      <div className="twitter_header_container">
        <div className="website_header">the 7 days challenge</div>
      </div>
      <div className="routes-section">
        <div>
          <div>🥇 gold medal "finished all the tasks"</div>
          <div className="no_winners_yet_container">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [-10, 10, -10, 10, 0] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="no_winners_yet"
            >
              no winners, yet
            </motion.div>
          </div>
        </div>
        <div>
          <div>🥈 silver medal "finished 6 tasks"</div>
          <div className="no_winners_yet_container">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [-10, 10, -10, 10, 0] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="no_winners_yet"
            >
              no winners, yet
            </motion.div>
          </div>
        </div>
        <div>
          <div>🥉 bronze medal "finished 5 task"</div>
          <div className="no_winners_yet_container">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [-10, 10, -10, 10, 0] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="no_winners_yet"
            >
              no winners, yet
            </motion.div>
          </div>
        </div>
        <div>
          <div>🎉 honorable mentions</div>
          <div className="honorable_mentions_container">
            {usernames &&
              usernames.map((username) => {
                return (
                  <div style={{ margin: "4px", display: "flex" }}>
                    <Avatar
                      size="lg"
                      name={username.username}
                      src={username.photoURL}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="routes-selector-section">
        <RoutesSelector />
      </div>
    </div>
  );
}

export default Leaderboard;
