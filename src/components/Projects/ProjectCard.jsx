import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
// import { Button } from "./Button";

// import { Link } from 'react-router-dom';
// import { MyButton } from './MyButton';

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
  // key: id,
}) => {
   
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>     
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
        {/* <Link to="/new-page">
            <MyButton />
          </Link> */}
      {/* <li>
        <Link to={"/new-page"}>
          <MyButton />
        </Link>
        {/* <MyButton /> */}
        {/* <a href={"/new-page"} className={styles.link}>
          Button
        </a>}
      </li> */}
      {/* <button>Read More</button> */}
      {/* <Button /> */}
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};