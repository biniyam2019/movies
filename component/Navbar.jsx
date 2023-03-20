import React from "react";
import Image from "next/dist/client/image";
import SearchContext from "./SearchContext";
import { useState,useContext } from "react";
import styles from "/styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRotate, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from '/public/img/BINIMOVIES_free-file.png';
import Link from "next/link";

function Navbar() {
  
  const [show,setShow]=useState(true);
 const { searchTerm, setSearchTerm } = useContext(SearchContext);
 const [degree,setDegree]=useState(0)
  const [letters,setLetters]=useState('');
  function turn() {
    setShow(!show);
    setDegree(360);

  }
   
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(searchTerm);
  };
   console.log(searchTerm);
   
  return (
    <>
      <nav className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logoContainer}>
            <Link href='/'>
              {" "}
              <Image src={logo} alt='logo' fill='cover'></Image>{" "}
            </Link>
          </div>

          <div className={styles.formcontainer}></div>
        </div>
        <div className={styles.right} id={show ? "hideright" : ""}>
          <div className={show ? "open" : "close"} onClick={turn}>
            {show ? (
              <FontAwesomeIcon className='close-icon' icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faTimes} className='open-icon' />
            )}
          </div>

          <ul className={show ? "lists" : "hide"} >
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='mailto:biniyamwolde2019@gmail.com'>Contact</Link>
            </li>
            <li>
              <Link href='/'>About</Link>
            </li>{" "}
            <li>
              <Link href='/'>Service</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

