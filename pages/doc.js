import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Doc() {
    return (
        <div className={styles.container}>
          <Head>
            <title>Wizapi - Documentation</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            
                <h1 className={styles.title}> wizapi    </h1>

          <h3 className={styles.title2}>  Usage Reference 📝    </h3>
            
        
    
         
    
            <div className={styles.grid}>
              <div className={styles.carddoc}>
              <h2>1. Go to endpoint: </h2>
                  
                  
                   <br/><br/>
                    Endpoint Path :  {' '}
              <code className={styles.code}><a href="https://wizapi.vercel.app/api/horoscope">/api/horoscope</a></code>
            
              <br/><br/>
                <h2>2. Get messages from stars: </h2>
                <p> Add to endpoint path parameter:</p><br/>
                <a href="https://wizapi.vercel.app/api/horoscope?sign=vergine"><code className={styles.code}>?sign=<italic className={styles.italic}>youritaliansign</italic></code></a>
                <br />  <br />  
                <p >All messages are provided in italian language. &#x1f1f9; </p>
                <p> Weekly horoscope by Rob Breszny, from Thursday to Wednesday.</p> <br /> 
                <h2>Example for Virgo sign: </h2>
                <a className={styles.italic_link} href="https://wizapi.vercel.app/api/horoscope?sign=vergine">https://wizapi.vercel.app/api/horoscope?sign=vergine</a>
              </div>
              </div>
           
              <br />  <br />
             
    
              <a
              href="https://github.com/wiztoth"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              <span className={styles.logo}>
                <Image src="/octocat.svg" alt="Github Logo" width={100} height={45} />
              </span>
            </a>
            
            
          </main>
    
      
        </div>
      )



  }
  
  export default Doc
