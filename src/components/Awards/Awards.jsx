import React from "react";

import styles from "./Awards.module.css";
import { getImageUrl } from "../../utils";

export const Awards = () => {
  return (
    <section className={styles.container} id="awards">
      <h2 className={styles.title}>Awards</h2>
        <div className={styles.imageContainer}>
        <img
          src={getImageUrl("awards/awards.png")}
          alt="Awards image"
          className={styles.awardsImage}
        />
        </div>
        <div className={styles.content}>
        <ul className={styles.awardsItems}>
          <li className={styles.awardsItem}>
            <img src={getImageUrl("awards/aw.png")} alt="MUN logo" className="myImage"/>
            <div className={styles.awardsItemText}>
              <h3>Harrison McCain Scholarship/Bursary</h3>
              <p>($16,000)</p>
            </div>
          </li>
          <li className={styles.awardsItem}>
            <img src={getImageUrl("awards/aw.png")} alt="MUN logo" className="myImage"/>
            <div className={styles.awardsItemText}>
              <h3>Transforming Our Horizons Entrance Scholarship</h3>
              <p>($2,550)</p>
            </div>
          </li>
          <li className={styles.awardsItem}>
            <img src={getImageUrl("awards/aw.png")} alt="MUN logo" className="myImage"/>
            <div className={styles.awardsItemText}>
              <h3>Dr. S.J. Carew Memorial Scholarship</h3>
              <p>($2,308)</p>
            </div>
          </li>
          <li className={styles.awardsItem}>
            <img src={getImageUrl("awards/aw.png")} alt="MUN logo" className="myImage"/>
            <div className={styles.awardsItemText}>
              <h3>PEGNL Bursary</h3>
              <p>($1,500)</p>
            </div>
          </li>
          <li className={styles.awardsItem}>
            <img src={getImageUrl("awards/aw.png")} alt="MUN logo" className="myImage"/>
            <div className={styles.awardsItemText}>
              <h3>Newfoundland and Labrador Education Foundation Scholarship</h3>
              <p>($1,000)</p>
            </div>
          </li>
          <li className={styles.awardsItem}>
            <img src={getImageUrl("awards/aw.png")} alt="MUN logo" />
            <div className={styles.awardsItemText}>
              <h3>Jubilee Knights of Columbus State Scholarship</h3>
              <p>($500)</p>
            </div>
          </li>
          <li className={styles.awardsItem}>
            <img src={getImageUrl("awards/aw.png")} alt="MUN logo" />
            <div className={styles.awardsItemText}>
              <h3>Various Small Scholarships</h3>
              <p>(Less than $500)</p>
            </div>
          </li>
          <li className={styles.awardsItem}>
            <img src={getImageUrl("awards/aw.png")} alt="MUN logo" />
            <div className={styles.awardsItemText}>
              <h3>Outstanding Project of ENGI 1020 Award</h3>
            </div>
          </li>
          <li className={styles.awardsItem}>
            <img src={getImageUrl("awards/aw.png")} alt="MUN logo" />
            <div className={styles.awardsItemText}>
              <h3>Most Improved Music Award</h3>
              <p>(Grade 12)</p>
            </div>
          </li>
          <li className={styles.awardsItem}>
            <img src={getImageUrl("awards/aw.png")} alt="MUN logo" />
            <div className={styles.awardsItemText}>
              <h3>Outstanding Contribution to the Music Program Award</h3>
              <p>(Grade 8)</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};