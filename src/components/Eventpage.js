import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";
import Eventcard from './Eventcard.js'
import styles from '../styles/Eventpage.module.scss'


function Eventpage() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        registrationnumber: "",
      });

    //   const navigate = useNavigate();

      function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }

      async function onSubmit(e) {
        e.preventDefault();
      
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };
      
        await fetch("http://localhost:5000/record/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPerson),
        })
        .catch(error => {
          window.alert(error);
          return;
        });
      
        setForm({ name: "", email: "", registrationnumber: "" });
        // navigate("/");
      }


  return (
    <>
        <section className={styles["event-page-top-container"]}>
            <h1 className={styles["event-page-top-backheading"]}>EVENTS</h1>
            <div className={styles["event-page-top-left"]}>
                <h1>Where our effort<br /> meets your talent!!</h1>
                <button><b>Explore more</b></button>
            </div>
            <div>
                <div>
                    <img src="../assets/Rectangle2.png" alt="rectangle" />
                </div>
            </div>
        </section>

        <section className={styles["event-page-second-container"]}>
            <h1 style={{fontSize:"250px"}} className={styles["event-page-top-backheading"]}>Upcoming</h1>
            <div className={styles['Eventcards-section']}>
            <Eventcard/>
            <Eventcard/>
            <Eventcard/>
            <Eventcard/>
            <Eventcard/>
            <Eventcard/>
            </div>
        </section>
        
        <section className={styles["event-page-third-container"]}>
            <h1 className={styles["event-page-top-backheading"]}>Ongoing</h1>
            <div className={styles['Eventcards-section']}>
            <Eventcard/>
            <Eventcard/>
            <Eventcard/>
            <Eventcard/>
            <Eventcard/>
            <Eventcard/>
            </div>
        </section>
        
        <section className={styles["event-page-fourth-container"]}>
            <h1 className={styles["event-page-top-backheading"]}>Latest</h1>
            <div className={styles['Eventcards-section']}>
            <Eventcard/>
            <Eventcard/>
            <Eventcard/>
            <Eventcard/>
            <Eventcard/>
            <Eventcard/>
            </div>
        </section>
        <section style={{marginTop:"200px"}}>
            <form>
                <input 
                type="text"
                // value={form.name}
                // onChange={(e) => updateForm({ name: e.target.value })}
                />                
                <input 
                type="email"
                // value={form.name}
                // onChange={(e) => updateForm({ email: e.target.value })}
                />                
                <input 
                type="text"
                // value={form.name}
                // onChange={(e) => updateForm({ registrationnumber: e.target.value })}
                />                
            </form>
        </section>
    </>
  )
}

export default Eventpage