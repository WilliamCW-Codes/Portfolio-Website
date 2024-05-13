import React from "react";

// import projectpages from "../../data/projectpages.json";
import styles from "./PageLayout.module.css";
import { getImageUrl } from "../../utils";

export const PageLayout = (
    // {projectInfo: { title, history, description },
) => {

    return (
        <section className={styles.container} id="projectpages">
        <h1 className={styles.title}>MUN Tbog</h1>
          <div className={styles.imageTextContainer}>
            <div className={styles.content}>
              <p className={styles.description}>pp</p>
            </div>
            <img src={getImageUrl(history)} alt="Image of project" className={styles.image} />
          </div>
          <div className={styles.imageTextContainer}>
            <img src={getImageUrl(history)} alt="Image of project" className={styles.image} />
            <div className={styles.content}>
                <p className={styles.description}>pp</p>
            </div>
          </div>
          <div className={styles.imageTextContainer}>
            <div className={styles.content}>
              <p className={styles.description}>pp</p>
            </div>
            <img src={getImageUrl(history)} alt="Image of project" className={styles.image} />
          </div>
        </section>
    );
};