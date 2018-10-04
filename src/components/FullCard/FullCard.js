import React from 'react';

import './FullCard.sass';

const fullCard = (props) => (
  <article className="FullCard">
    <div className="CardImage">
      <img src={props.image} alt={props.name} />
    </div>

    <div className="CardDescription">
      <h1>{props.name}</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eius et beatae molestias voluptate repudiandae veniam quo suscipit doloremque,
        recusandae nisi dolorem dolores ullam debitis autem placeat dicta,
        maiores doloribus commodi!
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eius et beatae molestias voluptate repudiandae veniam quo suscipit doloremque,
        recusandae nisi dolorem dolores ullam debitis autem placeat dicta,
        maiores doloribus commodi! recusandae nisi dolorem dolores
        recusandae nisi dolorem dolores
      </p>
    </div>
  </article>
);

export default fullCard;
