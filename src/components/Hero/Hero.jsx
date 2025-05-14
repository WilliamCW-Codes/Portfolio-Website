import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
// import resume from "../assets/hero/WilliamCW_Resume.pdf";

export const Hero = () => {
  // const resumeURL = "/WilliamCW_Resume.pdf";
  // // const downloadFileAtURL = (url) => {
  // //   const aTag = document.createElement("a");
  // //   aTag.href = url;
  // //   aTag.setAttribute("download", "WilliamCW_Resume.pdf");
  // //   document.body.appendChild(aTag);
  // //   aTag.click();
  // //   document.body.removeChild(aTag);
  // // };
  //   const downloadFileAtURL = (url) => {
  //   const aTag = document.createElement("a");
  //   aTag.href = url;
  //   aTag.setAttribute("download", "WilliamCW_Resume.pdf");
  //   document.body.appendChild(aTag);
  //   const event = new MouseEvent("click", { bubbles: true, cancelable: true, view: window });
  //   aTag.dispatchEvent(event);
  //   document.body.removeChild(aTag);
  // };
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
          {/* <a href="/William_Cull-Whitten_Resume.pdf" download target="_blank"
            rel="noopener noreferrer" style={{ display: "inline-block", padding: "12px 24px",
            backgroundColor: "#0070f3", color: "#fff", borderRadius: "8px", textDecoration: "none",
            fontWeight: "bold"}}>Download Resume
          </a> */}
        {/* <button onClick={() => downloadFileAtURL(resumeURL)}
            className={styles.resumeBtn}>Download Resume</button> */}
        
        
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div class="elfsight-app-3f37595f-fdee-47fc-89a0-0a1a7b665589" data-elfsight-app-lazy></div>
      
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
