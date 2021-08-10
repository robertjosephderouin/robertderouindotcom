import React, { ReactElement } from 'react';

import { Props } from './projects';

const Card = (props: Props): ReactElement => {
  const { name, image, description, tech, link } = props;
  return (
    <article className="project-card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{description}</p>
      <ul>
        {tech.map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>
      <a target="_blank" href={link}>
        Link
      </a>
    </article>
  );
};

export default Card;
