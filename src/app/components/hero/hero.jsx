import Image from 'next/image';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.greeting}>Hi! My Name is</p>
        <h1 className={styles.name}>Rizki Nugroho Firdaus </h1>
        <div id="about" className={styles.aboutText}>
          <p>I am a passionate technology enthusiast currently pursuing a degree in Telecommunication Engineering. </p>
          <p>I am driven by a strong curiosity to explore technological advancements and their practical applications in improving everyday life, Actively involved in lab research and organizational activities. Interested in Cyber Security and committed to integrating networking and IoT expertise with secure, innovative digital solutions.
. </p>
        </div>
      </div>
      <div className={styles.heroImageContainer}>
        <Image
          src="/profile.jpg"
          alt="Rizki Nugroho Firdaus"
          width={250}
          height={250}
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default Hero;