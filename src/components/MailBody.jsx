import React from "react";
import "./MailBody.css";

import { useSelector } from "react-redux";
function MailBody() {
  const id = useSelector((mail) => mail.Selectedmail);
  const AllMails = useSelector((mail) => mail.AllMails);
  const [mail] = AllMails.filter((e) => e.id === id) || [];

  if (!mail) {
    return <h1>Plz Select Mail </h1>;
  } else {
    return (
      <div className="mail-body">
        <div
          style={{
            background: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          }}
          className="mail-image"
        >
          {mail.From[0]}
        </div>
        <div>
          <h3>
            Name: {mail.From}
            {mail.id}{" "}
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            explicabo nesciunt voluptas, excepturi dolor reprehenderit, aut
            optio necessitatibus culpa architecto laudantium. Quidem, facere
            consequuntur praesentium dolores molestiae ipsa nostrum quas illo,
            debitis animi quis assumenda dicta sunt! Ipsum commodi voluptatibus
            odio consectetur. Nobis, veritatis. Iste dolore quisquam et quidem
            numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nemo non dolorum doloremque fuga pariatur nihil consequatur!
            Pariatur consequuntur quisquam ullam ducimus aliquam neque est ab
            asperiores sunt. Culpa, dolorem ab accusantium doloribus fuga
            voluptas error excepturi nobis ex consectetur ratione reiciendis!
            Magni necessitatibus, impedit laudantium incidunt quisquam autem
            accusamus iusto. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Omnis deserunt, quam corporis itaque alias nostrum atque.
            Voluptas, assumenda laudantium? Itaque dignissimos quia molestias
            nesciunt dicta totam quibusdam similique repellat, harum eligendi
            sunt. Vitae temporibus, dolorem, quia quasi fuga amet dicta
            asperiores nemo voluptatibus architecto voluptas obcaecati libero
            modi, dolores minima? Maiores veniam modi laudantium eos minus quia
            expedita non odit, magni reprehenderit nam suscipit ipsa. Provident
            tempore atque molestias eum sequi perspiciatis suscipit qui ipsum a
            beatae repellendus quis numquam ut optio, nam natus officia quidem
            nostrum ex ullam recusandae. Magni voluptatibus tempora quis quod
            quidem quae et, neque sequi.
          </p>
        </div>
      </div>
    );
  }
}

export default MailBody;
