import Head from 'next/head'
import {useRouter} from 'next/router';
import HomeLayout from '../components/HomeLayout'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '../components/Button';

const Home = ({isAuthenticated})=> {
  const router=useRouter();
  useEffect(()=>{
    if(isAuthenticated){
      router.push('/dashboard');
    }
  },[isAuthenticated]);

  const onTryNowBtnClick = ()=>{
    router.push('/signin');
  }

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
      <div className={styles.header}></div>
      <div className={styles.banner}>
        <div className={styles.bannerTitle}>
          <h1 className={styles.bannerHead}>Online meeting App</h1>
          <p className={styles.bannerLead}>Experience the power of seamless video conferencing with our platform, designed to facilitate efficient communication and collaboration among teams, regardless of geographical boundaries</p>
          <br/>
          <Button title="Use it now" onClickHandler={onTryNowBtnClick}/>
        </div>
        <div className={styles.bannerImg}>
          <img src='/static/images/video0.jpg' alt="banner-image" />
        </div>
      </div>
      <div className={styles.featureText0}>Unleash the Power of Collaboration Today!
      <div className={styles.featureText2}>Are you tired of limitations in connecting with your teams and clients? Say hello to a new era of seamless communication and collaboration with our free video conferencing website. Unlock the potential of virtual meetings and experience crystal-clear audio and high-definition video, enabling you to interact effortlessly with colleagues and stakeholders worldwide.
        </div>
      </div>

      <div className={`${styles.featureItem} row`} >
        <div className={styles.featureText}>Listen to the stories from our present user
        </div>
        <div className={styles.featureImg}>
          <img className={styles.featureImgImg} src="/static/images/meeting0.jpg" alt="world-connected" />
        </div>
        <div className={styles.featureText2}>Are you tired of limitations in connecting with your teams and clients? Say hello to a new era of seamless communication and collaboration with our free video conferencing website. Unlock the potential of virtual meetings and experience crystal-clear audio and high-definition video, enabling you to interact effortlessly with colleagues and stakeholders worldwide.
        </div>
      </div>
      <div className={styles.featureText2}>
        <div className={styles.featureText}>Features: </div>
        <p>
          <ol>
            <li> Unrestricted Accessibility: No more concerns about restrictive pricing plans. Our video conferencing platform is absolutely free, allowing you to host meetings with unlimited participants, empowering you to reach out to every member of your team.
            </li>
            <li> Intuitive Interface: With user-friendly navigation and simplified controls, you can effortlessly host and join video conferences without the need for extensive technical expertise.
            </li>
            <li> Secure & Private: Your data is our priority. Our platform is fortified with robust security measures, ensuring your meetings are safe, confidential, and free from unauthorized access.
            </li>
            <li> Crystal-Clear Audio & Video: Experience conversations that transcend borders with our high-quality audio and HD video, enhancing the sense of presence during each virtual interaction.
            </li>
            <li>Real-Time Collaboration: Share screens, documents, and presentations seamlessly, fostering dynamic discussions and enabling everyone to actively contribute to the conversation.
            </li>
          </ol>
          </p>
      </div>
    <div className={styles.footer}>
    <a className={`${styles.navbarBrand}`} href="#">Meeting App</a>
    <p className={styles.footerText}>Copyright is all rights reserved. Creative Commons is some rights reserved</p>
    </div>
    </HomeLayout>
    </>
  )
}

const mapStateToProps = ({auth})=>({
  isAuthenticated:auth.isAuthenticated
});

export default connect(mapStateToProps,null)(Home);