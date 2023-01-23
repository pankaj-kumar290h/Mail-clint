import React from "react";
import "./App.css";
import AllMailList from "./components/AllMailList";
import MailBody from "./components/MailBody";
import { useSelector } from "react-redux";
function App() {
  const state = useSelector((state) => state.AllMails);

  return (
    <div className="App">
      <div className="AllMail">
        {state.map((data) => (
          <AllMailList key={data.id} prop={data} />
        ))}
      </div>
      <div className="MailBody">
        <MailBody />
      </div>
    </div>
  );
}

export default App;
