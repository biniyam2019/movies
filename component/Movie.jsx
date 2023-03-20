import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import styles from "/styles/Movies.module.css";
function Movie() {
  const [search, setSearch] = useState();
  const [submitcheck, setSubmitcheck] = useState(false);
  const [word, setWord] = useState("avengers");
  const [result, setResult] = useState([]); 

  // button click handler to style the button when the button is clicked
  function clicked(event) {
    setTimeout(function () {
      window.scrollTo({
        top: 600,
        left: 0,
        behavior: "smooth",
      });
    }, 1000);
  }

  async function fetcher() {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=0d85cdde92f3a280249c50e046a631b1&query=${word}`
    )
      .then((response) => response.json())
      .then((data) => setResult(data.results));
  }

  useEffect(() => {
    fetcher();
  }, []);
  
  function submitted(event) {
    event.preventDefault(); // prevent the page from reloading
    setSubmitcheck(!submitcheck);
    setWord(search);
  }

  //take place when the state of submitcheck changes
  // use effect check whether the state of Submitcheck is changed
  useEffect(() => {
    fetcher();
  }, [submitcheck]);

 

  return (
    <div style={{ backgroundColor: "#060225" }}>
      <div className={styles.formContainer}>
        <div className={styles.formInputContainer}>
          <form onSubmit={submitted} className={styles.forms}>
            <input
              className={styles.Input}
              type='text'
              placeholder='enter movie title'
              onChange={(event) => {
                setSearch(event.target.value);
              }}></input>
              
            <button
              type='submit'
              className={styles.buttons}
              onClick={() => {
                clicked();
              }}
              disabled={!search}>
              <img
                src='/img/search.png'
                style={{ width: "30px", height: "30px" }}></img>
            </button>
          </form>
        </div>
      </div>

      <div className={styles.container}>
        {result.map((e) => (
          <Moviecard key={e.id} objects={e} />
        ))}
      </div>
    </div>
  );
}
export default Movie;
