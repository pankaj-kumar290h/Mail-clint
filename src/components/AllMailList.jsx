import React from "react";
import "./AllMailList.css";
import { useDispatch, useSelector } from "react-redux";
import { SelectedMail } from "../store/SelectedMailReducer";
import { ChangeRead, DeletMail } from "../store/Allmailreducer";
import { MdDeleteForever } from "react-icons/md";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AllMailList({ prop }) {
  const SelectedMailId = useSelector((state) => state.Selectedmail);
  const dispatch = useDispatch();
  const { date, isRead, id, From, subject } = prop;
  const handleclick = (id) => (event) => {
    dispatch(SelectedMail(id));
    dispatch(ChangeRead(id));
  };

  const deletmail = (id) => (event) => {
    dispatch(DeletMail(id));
    //tost massage
    toast.success("Msg deleted", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div
      style={{
        background: isRead ? "#FFFFE8" : "gray",
        border: SelectedMailId === id ? "3px solid blue" : "red",
      }}
      key={id}
      onClick={handleclick(id)}
      className="mail-item"
    >
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div
        className="mail-image"
        style={{
          background: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        }}
      >
        {From[0]}
      </div>
      <div>
        <p>
          From:<span>{From}</span>
        </p>
        <p>
          Subject:<span> {subject} </span>
        </p>
        <p className="msg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem...
        </p>
        <div>
          <p className="time">Date:- {date}</p>
        </div>
      </div>
      <button onClick={deletmail(id)} className="delet-mail-btn">
        <MdDeleteForever />
      </button>
    </div>
  );
}

export default AllMailList;
