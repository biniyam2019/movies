import React, { use, useEffect } from "react";
import styles from "/styles/Moviecard.module.css";
import Image from "next/image";
import star from "/public/img/star.png";
import { useState } from "react";
import Link from "next/link";
function Moviecard(props) {
  //console.log(props.objects.poster_path);
  // console.log(props.objects.backdrop_path);

  //image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
  const [value, setValue] = useState();

 

  https: return (
    <>
      <div className={styles.container}>
        <Link
          key={props.objects.id}
          href={`movies/${props.objects.original_title}/${props.objects.id}`}
          className={styles.container}>
          <div className={styles.imgcontainer}>
            <Image
              src={`https://image.tmdb.org/t/p/original${props.objects.poster_path}`}
              layout='fill'
              objectFit='fill'
              alt='images'></Image>
          </div>
          <div className={styles.rate}>
            <span>{props.objects.vote_average}</span>
            <Image src={star} alt='star' width={20} height={20}></Image>
          </div>

          <div className={styles.title}> {props.objects.original_title}</div>
        </Link>
      </div>
    </>
  );
}

export default Moviecard;
