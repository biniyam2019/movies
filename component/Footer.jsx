import React from "react";
import styles from "/styles/Footer.module.css";
import { useState } from "react";
import Image from "next/image";
function Footer() {
  const [date, setDate] = useState(new Date().toDateString());
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imagecontainer}>
          hello
          <Image src='/img/bg.jpg' layout='fill' alt='image' />
        </div>
        <div className={styles.motto}>
          <h2>Entertainment for Evertbody!</h2>
        </div>
        <div className={styles.contacts}>
          <div className={styles.location}>
            <h1 className={styles.title}>Find our Movie Store</h1>
            <div className={styles.row}>
              <p className={styles.text}>
                2567 Kiit Patia road Central,
                <br />
                Bale Robe ,10024
                <br /> (251) 962069368
              </p>
            </div>
            <div className={styles.row}>
              <p className={styles.text}>
                1235 Saris Hana Nifassilk
                <br />
                Addis Ababa ,1000
                <br /> (+251) 54893994
              </p>
            </div>
            <div className={styles.row}>
              <p className={styles.text}>
                3452 Bole posta sefer
                <br />
                Adama Nazret ,100248
                <br /> (251) 910035315
              </p>
            </div>
            <div className={styles.row}>
              <p className={styles.text}>
                2567 Kiit Patia road Central,
                <br />
                Bale Robe ,10024
                <br /> (251) 962069368
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Copyright &copy; {date}</p>
      </div>
    </div>
  );
}

export default Footer;
