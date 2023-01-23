import React from "react";
import "./AllMailList.css";
import { useDispatch } from "react-redux";
import { SelectedMail } from "../store/SelectedMailReducer";
import { ChangeRead } from "../store/Allmailreducer";
function AllMailList({ prop }) {
  const dispatch = useDispatch();
  const { isRead, id, From, subject } = prop;
  const handleclick = (id) => (event) => {
    console.log(id);
    dispatch(SelectedMail(id));
    dispatch(ChangeRead(id));
  };
  return (
    <div
      style={{ background: isRead ? "green" : "red" }}
      key={id}
      onClick={handleclick(id)}
      className="mail-item"
    >
      <div className="mail-image">P</div>
      <div>
        <p>
          From:<span>{From}</span>
        </p>
        <p>
          Subject:<span> {subject} </span>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        </p>
      </div>
    </div>
  );
}

export default AllMailList;
