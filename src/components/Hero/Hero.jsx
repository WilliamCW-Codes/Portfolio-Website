import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import resume from "../assets/hero/WilliamCW_Resume.pdf";

export const Hero = () => {
  const resumeURL = "/WilliamCW_Resume.pdf";
  // const downloadFileAtURL = (url) => {
  //   const aTag = document.createElement("a");
  //   aTag.href = url;
  //   aTag.setAttribute("download", "WilliamCW_Resume.pdf");
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   document.body.removeChild(aTag);
  // };
    const downloadFileAtURL = (url) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "WilliamCW_Resume.pdf");
    document.body.appendChild(aTag);
    const event = new MouseEvent("click", { bubbles: true, cancelable: true, view: window });
    aTag.dispatchEvent(event);
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
          <a href="mailto:ccullwhitten@mun.ca" className={`${styles.contactBtn} ${styles.contactBtnHover}`}>
            Contact Me
          </a>
        <button onClick={() => downloadFileAtURL(resumeURL)}
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
