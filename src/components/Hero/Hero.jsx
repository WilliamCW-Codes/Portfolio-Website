import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const resumeURL = "assets/hero/Resume.pdf";

export const Hero = () => {
  const downloadFileAtURL = (url) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "Resume.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello World! <br /> My name is William</h1>
        <p className={styles.description}>
          I’m a second year Computer Engineering student at Memorial University of Newfoundland (MUN).
        </p>
        <div className={styles.buttonGroup}>
          <a href="mailto:ccullwhitten@mun.ca" className={styles.contactBtn}>
            Contact Me
          </a>
        <button onClick={() => downloadFileAtURL("/assets/hero/Resume.pdf")}
            className={styles.resumeBtn}>Download Resume</button>
        </div>
      </div>
      <img
        src={getImageUrl("hero/will.jpeg")}
        alt="William Headshot"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
