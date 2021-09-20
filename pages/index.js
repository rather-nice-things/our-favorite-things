import Head from 'next/head'
import Image from 'next/image'
import heroImg from '../assets/hero/hero1.jpg'
import avocadoImg from '../assets/body_types/avocado.jpg'
import lemonImg from '../assets/body_types/lemon.jpg'
import peanutImg from '../assets/body_types/peanut.jpg'
import strawberryImg from '../assets/body_types/strawberry.jpg'
import styles from '/styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Our Favorite Things</title>
        <meta name="description" content="Product Reviews and Advice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.hero} glass`}>
        <Image src={heroImg} alt="Lady with flower in hair" layout="responsive" objectFit="contain"/>
      </div>
      <div className={`${styles.introTextContainer} glass`}>
        <div className={styles.introTextTitle}>
          Our Favorite Things
        </div>
        <div className={styles.introText}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus leo at nibh imperdiet, ut scelerisque ipsum convallis. Pellentesque sollicitudin felis vitae turpis ornare rhoncus. Praesent tincidunt arcu quis arcu aliquam, vel semper libero dignissim. Maecenas id lobortis velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis accumsan consectetur tellus. Nam consectetur ligula sit amet nulla elementum, et gravida lorem ullamcorper. Praesent facilisis, metus in rutrum tempus, massa nulla imperdiet enim, at maximus eros ipsum eu leo. Nullam at rhoncus felis. Etiam consectetur lorem congue urna suscipit, nec vulputate metus sollicitudin. Aenean tincidunt sapien ac quam lobortis blandit.</p><br />
          <p>Duis sed sodales ante. Phasellus nisi est, vulputate non sem quis, dignissim suscipit nisi. Morbi nisl est, tincidunt id diam ut, congue placerat velit. Nullam elementum est lectus, congue pulvinar ipsum sagittis commodo. Maecenas bibendum eget purus ut ullamcorper. Maecenas turpis quam, malesuada et dignissim id, semper et nisi. In rutrum nisl quis urna placerat finibus. Suspendisse erat lorem, sagittis non vestibulum eget, aliquet in justo. Nunc metus odio, consequat in libero id, bibendum volutpat lorem. Vivamus iaculis lectus id consectetur dapibus. Pellentesque tempus felis non sem eleifend, sed euismod justo aliquet. Cras a interdum sem. Vestibulum id augue sit amet dolor feugiat varius et eu elit. Quisque dapibus lacus non nisi fermentum faucibus.</p><br />
        </div>
      </div>
      <div className={styles.bodyTypesContainer}>
        <div className={styles.bodyType}>
          <Image src={avocadoImg} alt="Avocado" layout="responsive" objectFit="contain" className={`${styles.roundedImg} cursor-pointer`}/>
        </div>
        <div className={styles.bodyType}>
          <Image src={strawberryImg} alt="Strawberry" layout="responsive" objectFit="contain" className={`${styles.roundedImg} cursor-pointer`}/>
        </div>
        <div className={styles.bodyType}>
          <Image src={lemonImg} alt="Lemon" layout="responsive" objectFit="contain" className={`${styles.roundedImg} cursor-pointer`}/>
        </div>
        <div className={styles.bodyType}>
          <Image src={peanutImg} alt="Peanut" layout="responsive" objectFit="contain" className={`${styles.roundedImg} cursor-pointer`}/>
        </div>
      </div>
    </main>
  )
}
