import Head from 'next/head'
import styles from '../styles/Home.module.css'
import * as gtag from '../pages/lib/gtag';


export default function Home() {
  const addToCart = () =>{
    gtag.event({
      action:"add_to_cart",

    })
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
    <script src="../public/~partytown/partytown.js"></script>
    <main>
      Hello home Page
      <div>
        <button onClick={()=>addToCart()}>Add to Cart</button>
      </div>
    </main>
    </div>
  )
}
