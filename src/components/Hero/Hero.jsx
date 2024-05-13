import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello World! <br /> My name is William</h1>
        <p className={styles.description}>
        I’m a second year Computer Engineering student at Memorial University of Newfoundland (MUN).
        </p>
        <a href="mailto:ccullwhitten@mun.ca" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/will.jpeg")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
