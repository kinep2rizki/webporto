import Image from 'next/image';
import styles from './projects.module.css';

const projectData = [
  {
    title: 'AQUA GROWTH - Telkom University',
    image: '/lala.jpeg',
    alt: 'AQUA GROWTH Project',
    description: 'The device processes wastewater from batik production, refining it to a neutral pH level, which is then used to irrigate hydroponic plants.',
    contribution: 'I was responsible for developing the IoT device and overseeing the installation of the entire system during our Abdimas (Community Service Program).'
  },
  {
    title: 'Boostify',
    image: '/boostify.jpg',
    alt: 'Boostify Project',
    description: 'A facial recognition-based attendance system using Convolutional Neural Networks (CNN), developed in collaboration with the Cyber Physical System Laboratory.',
    contribution: 'I managed the implementation on a Raspberry Pi 5, ensuring efficient algorithm processing, designed a custom case for Boostify, created the wiring layout, and configured cron jobs for seamless automation.'
  },
  {
    title: 'Sijaga',
    image: '/sijaga.png',
    alt: 'Sijaga Project',
    description: 'Sijaga is a smart security locker system designed to provide enhanced protection for personal belongings. It integrates RFID-based access control, a solenoid locking mechanism, and a vibration sensor to detect and prevent unauthorized tampering or forced entry.',
    contribution: '' // Anda bisa menambahkan kontribusi di sini jika ada
  }
];

const Projects = () => {
  return (
    <section id="project">
      <h2 className={styles.title}>My Projects </h2>
      <div className={styles.grid}>
        {projectData.map((project, index) => (
          <div className={styles.card} key={index}>
            <Image src={project.image} alt={project.alt} width={400} height={225} className={styles.cardImage} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.contribution && <p className={styles.contribution}>{project.contribution}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;