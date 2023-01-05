import RoutesSelector from "../Comps/RoutesSelector";
import { dataContext } from "../contexts/dataContext";
import { useContext, useEffect, useState } from "react";

function Account() {
  const { appData } = useContext(dataContext);
  appData && console.log(appData[0]);
  if (appData) {
    return (
      <div className="App">
        <div className="twitter_header_container">
          <div className="website_header">the 15 days challenge</div>
        </div>
        <div className="routes-section">
          <div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
            <img src={appData[0].photoURL} style={{ borderRadius: "50%" }} />
          </div>
          <table>
            <tr>
              <td>Name</td>
              <td>{appData[0].displayName}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{appData[0].email}</td>
            </tr>
            <tr>
              <td>finished tasks</td>
              <td>0</td>
            </tr>
          </table>
        </div>
        <div className="routes-selector-section">
          <RoutesSelector />
        </div>
      </div>
    );
  } else {
    return "loading";
  }
}

export default Account;
