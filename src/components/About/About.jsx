import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/willboat.png")}
          alt="Me in my hometown"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/mg.png")} alt="icon" />
            <div className={styles.aboutItemText}>
              <h3>Hometown</h3>
              <p>
                I was born and raised in the scenic town of Petty Harbour, Newfoundland and Labrador (NL).
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/mg.png")} alt="icon" />
            <div className={styles.aboutItemText}>
              <h3>School</h3>
              <p>
                I graduated from St. Kevin's High School in 2022 and I am currently pursuing Computer Engineering 
                at Memorial University of Newfoundland (MUN).
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/mg.png")} alt="icon" />
            <div className={styles.aboutItemText}>
              <h3>Design Teams</h3>
              <p>
                I am currently a part of the engineering design teams; MUN Concrete Toboggan and MUNStar-1 CubeSat.
              </p>
            </div>
          </li>
        </ul>
        {/* here */}
      </div>
    </section>
  );
};
