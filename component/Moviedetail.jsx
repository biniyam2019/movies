import React, {useState,useEffect, use} from 'react'
import { StyleRegistry } from 'styled-jsx';
import styles from '/styles/Moviedetail.module.css'
import Image from 'next/image';

function Moviedetail({data}) {
  
  
   
   
    
  return (
    <div className={styles.container}>

      <div className={styles.child}>
        <div className={styles.imgContainer}>
          <div className={styles.imgs}>
            <Image
              src={`https://image.tmdb.org/t/p/original${data.data.poster_path}`}
              alt='image'
              layout='fill'></Image>
          </div>
        </div>
        <div
          className={styles.desc}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.data.poster_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
          <div className={styles.right}>
            <ul className={styles.lists}>
              <li>
                <h1> {data.data.original_title}</h1>
                <p>Realese Date: {data.data.release_date}</p>
              </li>
              <li> {data.data.popularity}% user Score</li>
              <li>
                <h3>Over View</h3>
                <p>{data.data.overview}</p>
              </li>

             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moviedetail