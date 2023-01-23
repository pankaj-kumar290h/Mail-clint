import React, { useState } from "react";
import "./App.css";
import AllMailList from "./components/AllMailList";
import MailBody from "./components/MailBody";
import { useSelector } from "react-redux";
function App() {
  const state = useSelector((state) => state.AllMails);
  const [flag, setFlag] = useState("");
  if (state.length === 0) {
    return <h1>No Mail Found</h1>;
  }
  let msg = state;

  if (flag === "all") {
    msg = state;
  } else if (flag === "read") {
    msg = state.filter((mail) => mail.isRead === true);
  } else if (flag === "unread") {
    msg = state.filter((mail) => mail.isRead === false);
  }

  return (
    <>
      <nav>
        <div>
          <p onClick={() => setFlag("all")}>All</p>
          <p onClick={() => setFlag("unread")}>Unread</p>
          <p onClick={() => setFlag("read")}>Read</p>
        </div>
      </nav>
      <div className="App">
        <div className="AllMail">
          {msg.length ? (
            msg.map((data) => <AllMailList key={data.id} prop={data} />)
          ) : (
            <h3>No msg Found</h3>
          )}
        </div>
        <div className="MailBody">
          <MailBody />
        </div>
      </div>
    </>
  );
}

export default App;
