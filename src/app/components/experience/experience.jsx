import Image from 'next/image';
import styles from './experience.module.css';

const experienceData = [
  {
    logo: '/mbc.jpeg',
    alt: 'Multimedia Lab Logo',
    title: 'Teaching assistant',
    company: 'Multimedia Application, Big Data and Cybersecurity Laboratory',
    date: 'Mar 2025-Present',
    desc: 'I served as a Teaching Assistant, where I assisted in teaching Blockchain and Cryptography concepts. My responsibilities included guiding students through hands-on practices using tools such as Wireshark and Cisco Packet Tracer to enhance their understanding of network security and encryption principles.'
  },
  {
    logo: '/CPS jpg.JPG',
    alt: 'Cyber Physical System Lab Logo',
    title: 'Research assistant',
    company: 'Cyber Physical System Laboratory',
    date: 'Aug 2024-Present',
    desc: 'Conducted research and worked on projects in the areas of web development, embedded systems and machine learning. Collaborated with team members to achieve set goals while managing upcoming events for the Cyber Physical System Laboratory'
  },
  {
    logo: '/CPS jpg.JPG',
    alt: 'Cyber Physical System Lab Logo',
    title: 'Chief Organizer',
    company: 'Cyber Physical System Laboratory',
    date: 'Sep 2024-Dec 2024',
    desc: 'Served as the Chief Organizer of Cyber Academy 2024, responsible for monitoring event implementation and ensuring that each division performed its duties effectively.'
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.timeline}>
        {experienceData.map((item, index) => (
          <div className={styles.item} key={index}>
            <Image src={item.logo} alt={item.alt} width={60} height={60} className={styles.logo} />
            <div className={styles.content}>
              <h4>{item.title}</h4>
              <p className={styles.company}>{item.company}</p>
              <p className={styles.date}>{item.date}</p>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;