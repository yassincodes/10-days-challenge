import Home from "./Home"
import Leaderboard from "./Folders/Leaderboard";
import Challenges from "./Folders/Challenges";
import Account from "./Folders/Account";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="account" element={<Account />} />
    </Routes>
  );
}

export default App;

