import React from 'react'
import Layout from "../component/layout/layout";
import style from "./pages-styles/contacts.module.css";

function Contacts() {
  return (
    <div>
      <Layout>
        <div className={style.wrapper}>
          <div className={style.body}>
            <h1>Contact Us Now</h1>
            <div>
              <form>
                <div className={style.userInputGroup}>
                  <div className={style.inputGroup}>
                    <span className={style.inputLabel}>First Name</span>
                    <input className={style.nameInput} placeholder='John'/>
                  </div>
                  <div className={style.inputGroup}>
                    <span className={style.inputLabel}>Last Name</span>
                    <input className={style.nameInput} placeholder='Smith'/>
                  </div>
                  
                </div>
                <div className={style.inputGroup}>
                  <span className={style.inputLabel}>Email</span>
                  <input placeholder='somebuissnesemail@gmail.com'/>
                </div>
                <div className={style.inputGroup}>
                  <span className={style.inputLabel}>Phone Number</span>
                  <input placeholder='+380 11 111 1111'/>
                </div>
                <div className={style.inputGroup}>
                  <span className={style.inputLabel}>Tell us how we can help you</span>
                  <textarea style={{height: "150px", resize: "none"}} placeholder='Describe your problem or question'/>
                </div>
                <input className={style.sendBtn} value="Send" type="submit"/>
              </form>
            </div>

            <h1 style={{marginTop: "50px"}}>Our Contacts</h1>
            <p>We are available from 8:00 to 20:00 at Monday-Friday</p>
            <div className={style.contactsGroup}>
              <div className={style.contactsInnerGroup}>
                <div className={style.contactsBlock}>
                  <span className={style.caption}>Our Email</span>
                  <span className={style.contactsText}>oursupportemail@gmail.com</span>
                </div>
                <div className={style.contactsBlock}>
                  <span className={style.caption}>Our Phone Number</span>
                  <span className={style.contactsText}>+49 30 267582150</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
        
    </div>
  );
}

export default Contacts;