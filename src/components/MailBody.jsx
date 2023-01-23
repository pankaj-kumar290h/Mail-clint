import React from "react";
import "./MailBody.css";
import { data } from "../store/data";

import { useSelector } from "react-redux";
function MailBody() {
  const id = useSelector((mail) => mail.Selectedmail);
  const [mail] = data.filter((e) => e.id === id);
  console.log(mail);
  return (
    <div className="mail-body">
      <div className="mail-image">P</div>
      <div>
        <h3>
          Name: {mail.From}
          {mail.id}{" "}
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          explicabo nesciunt voluptas, excepturi dolor reprehenderit, aut optio
          necessitatibus culpa architecto laudantium. Quidem, facere
          consequuntur praesentium dolores molestiae ipsa nostrum quas illo,
          debitis animi quis assumenda dicta sunt! Ipsum commodi voluptatibus
          odio consectetur. Nobis, veritatis. Iste dolore quisquam et quidem
          numquam.
        </p>
      </div>
    </div>
  );
}

export default MailBody;
