import Image from 'next/image';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div className={styles.links}>
        <a href="mailto:rizkinf2004@gmail.com" className={styles.link} aria-label="Send an email">
          <Image src="/email.png" alt="Email icon" width={35} height={35} />
        </a>
        <a href="https://www.linkedin.com/in/rizkinugrohofirdaus" target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="Visit my LinkedIn profile">
          <Image src="/linkedin.png" alt="LinkedIn icon" width={35} height={35} />
        </a>
        <a href="https://www.instagram.com/kinep2rizki?utm_source=qr&igsh=MWdsdmNwN2pwNGFnZg==" target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="Visit my Instagram profile">
          <Image src="/instagram.png" alt="Instagram icon" width={35} height={35} />
        </a>
      </div>
    </footer>
  );
};

export default Contact;