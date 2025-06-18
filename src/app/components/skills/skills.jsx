import styles from './skills.module.css';

const Skills = () => {
  return (
    <section>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.container}>
        <span className={styles.skill}>MikroTik</span>
        <span className={styles.skill}>Python</span>
        <span className={styles.skill}>Network Administration</span>
        <span className={styles.skill}>Cisco Networking</span>
        <span className={styles.skill}>Linux</span>
        <span className={styles.skill}>Raspberry Pi</span>
        <span className={styles.skill}>Machine Learning</span>
        <span className={styles.skill}>C/C++</span>
        <span className={styles.skill}>Blockchain</span>
        <span className={styles.skill}>Teaching</span>
        <span className={styles.skill}>Wireshark</span>
        <span className={styles.skill}>Cisco Packet Tracer</span>
        <span className={styles.skill}>Data Visualization</span>
        <span className={styles.skill}>Internet Of Things</span>
        <span className={styles.skill}>HTML</span>
        <span className={styles.skill}>CSS</span>
        <span className={styles.skill}>JavaScript</span>
        <span className={styles.skill}>React.js</span>
        <span className={styles.skill}>MySQL</span>
        <span className={styles.skill}>Git</span>
      </div>
    </section>
  );
};

export default Skills;