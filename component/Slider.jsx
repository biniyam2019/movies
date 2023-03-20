import React, { useEffect, useState } from "react";
import styles from "/styles/Slider.module.css";
import Image from "next/image";
import picture from "/public/img/fire.png";
function Slider() {
  const [url, setUrl] = useState([]); // List of Url of Images
  const [list, setList] = useState([]); // => list of Movies
  const word = "titanic";

  const [count, setCount] = useState(0); // for transformation
  function right() {
    count === 19 ? setCount(0) : setCount(count + 1);
  }
  function left() {
    count === 0 ? setCount(19) : setCount(count - 1);
  }

  useEffect(() => {
    fetcher();
  }, []);
  async function fetcher() {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=0d85cdde92f3a280249c50e046a631b1"
    )
      .then((response) => response.json())
      .then((responseData) => setList(responseData.results));
  }
  // console.log(count);

  return (
    <>
      <div
        className={styles.right}
        onClick={() => {
          right();
        }}>
        <Image src='/img/arrowr.png' alt='right' layout='fill' />
      </div>
      <div
        className={styles.left}
        onClick={() => {
          left();
        }}>
        <Image src='/img/arrowl.png' alt='right' layout='fill' />
      </div>
      <div
        className={styles.container}
        style={{ translate: `calc(-100vw *${count} ` }}>
        {list.map((ev) => (
          <div className={styles.images} key={ev.id}>
            <Image
              src={`https://image.tmdb.org/t/p/original${ev.backdrop_path}`}
              alt='image'
              objectFit='contain'
              layout='fill'
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Slider;
