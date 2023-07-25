import Head from 'next/head'
import {useRouter} from 'next/router';
import HomeLayout from '../components/HomeLayout'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '../components/Button';


const about = ()=> {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </Head>
      <HomeLayout>
      <nav className={`navbar ${styles.navbar} navbar-default`}>
      <div className="container-fluid">
        <div className={`navbar-header`}>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className={`${styles.navbarBrand} navbar-brand`} href="#">Meeting App</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
          <li className={`${styles.navLink} nav-link`} data-toggle="modal" data-target="#joinModal">
              <a href="/">Home</a>
            </li>
            <li className={`${styles.navLink} nav-link`} data-toggle="modal" data-target="#joinModal">
              <a href="/about">About us</a>
            </li>
            <li className={`${styles.navLink} nav-link`} data-toggle="modal" data-target="#createModal">
              <a href="/signin">Login/SignUp</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <div className={styles.header2}></div>
      <div className={styles.featureText3}>
        <div className={styles.featureText}> Instructions for video conferencing web application:</div>
        <p>
          <ul>
            <li> Step 1: Sign Up or Log In
            </li>
            <li> Step 2: Schedule or Join a Meeting
            </li>
            <li> Step 3: Invite Participants
            </li>
            <li> Step 4: Set Up Your Audio and Video
            </li>
            <li> Step 5: Join the Meeting
            </li>
          </ul>
        </p>
      </div>
      <div className={styles.headline}>What can the meeting app do?</div>
      <div className={styles.contentItem} >
        <div className={styles.headText}>View the dashboard.</div>
        <div className={styles.contentImg}>
          <img className={styles.contentImgImg} src="/static/images/content0.png" alt="business" />
        </div>
      </div>
      <div className={styles.contentItem} >
        <div className={styles.contentImg}>
          <img className={styles.contentImgImg} src="/static/images/content1.png" alt="webinar" />
        </div>
        <div className={styles.headText}>Join a meeting</div>
      </div>
      <div className={styles.contentItem} >
        <div className={styles.headText}>Host a meeting</div>

        <div className={styles.contentImg}>
          <img className={styles.contentImgImg} src="/static/images/content2.png" alt="friends" />
        </div>
      </div>
    <div className={styles.footer}>
    <a className={`${styles.navbarBrand}`} href="#">Meeting App</a>
    <p className={styles.footerText}>2022@All rights reserved.Developed by Cheng Jie</p>
    </div>
    </HomeLayout>
    </>
  )
}
const mapStateToProps = ({auth})=>({
    isAuthenticated:auth.isAuthenticated
  });
  
export default connect(mapStateToProps,null)(about);