import React, { useEffect } from "react";
import styles from "/styles/Details.module.css";
function Details() {
  useEffect(() => {
    fetcher();
  }, []);
  function fetcher() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ec2a2f5c36msh9062a2676620f99p19ca2cjsne7eb7ea7dcd3",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    fetch("https://imdb8.p.rapidapi.com/auto-complete?q=spider", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.d);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className={styles.container}>
      {" "}
      <h1>hello world</h1>
    </div>
  );
}

export default Details;
async function getServerSideProps() {}
async function getStaticPath(context) {
  console.log(context);
}
