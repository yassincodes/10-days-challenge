import { Link, useLocation } from "react-router-dom";

//

function RoutesSelector() {
  const location = useLocation();
  console.log(location.pathname);

  console.log("hi")
  return (
    <div className="links">
      <div className="logo-icon">challenge</div>

        <Link to="/challenges" className="link" style={location.pathname == "/challenges" ? { fontWeight: 800 } : {}}>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-apple-arcade"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={location.pathname == "/challenges" ? "black" : "#2c3e50"}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="5" r="2" />
              <path d="M20 12.5v4.75a0.734 .734 0 0 1 -.055 .325a0.704 .704 0 0 1 -.348 .366l-5.462 2.58a4.998 4.998 0 0 1 -4.27 0l-5.462 -2.58a0.705 .705 0 0 1 -.401 -.691l-.002 -4.75" />
              <path d="M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a0.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a0.691 .691 0 0 1 .028 -1.27z" />
              <line x1="12" y1="7" x2="12" y2="13" />
            </svg>
          </div>
          <div className="icon-title">challenges</div>
        </Link>

      <Link
        to="/leaderboard"
        className="link"
        style={location.pathname == "/leaderboard" ? { fontWeight: 800 } : {}}
      >
        <div className="icon winners-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-trophy"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={location.pathname == "/leaderboard" ? "black" : "#2c3e50"}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <line x1="7" y1="4" x2="17" y2="4" />
            <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
            <circle cx="5" cy="9" r="2" />
            <circle cx="19" cy="9" r="2" />
          </svg>
        </div>
        <div className="icon-title">leaderboard</div>
      </Link>

      <Link
        to="/account"
        className="link"
        style={location.pathname == "/account" ? { fontWeight: 800 } : {}}
      >
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-user"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={location.pathname == "/account" ? "black" : "#2c3e50"}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
        </div>
        <div className="icon-title">account</div>
      </Link>
    </div>
  );
}

export default RoutesSelector