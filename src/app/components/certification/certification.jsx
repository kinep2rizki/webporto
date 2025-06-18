import styles from './certification.module.css';

// Anda bisa menambahkan sertifikasi Anda di sini
const certifications = [
  {
    name: 'Belajar Dasar Visualisasi Data',
    issuer: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/JLX199GDJP72' // Ganti dengan link sertifikat Anda
  },
  {
    name: 'Memulai Pemrograman dengan Python',
    issuer: 'Dicoding Indonesia',
    link: 'https://www.dicoding.com/certificates/QLZ933K49Z5D' // Ganti dengan link sertifikat Anda
  },
  {
    name: 'Fundamental Algoritma',
    issuer: 'Coding Studio',
    link: 'https://member.codingstudio.id/certificate/nvWfQP2zI6' // Ganti dengan link sertifikat Anda
  },
  {
    name: 'Fundamental Command Linux',
    issuer: 'Coding Studio',
    link: 'https://member.codingstudio.id/certificate/qdzYR99FKx' // Ganti dengan link sertifikat Anda
  },
  {
    name: 'Fundamental Cyber Security',
    issuer: 'Coding Studio',
    link: 'https://member.codingstudio.id/certificate/HBHmClFP1z' // Ganti dengan link sertifikat Anda
  },
  {
    name: 'Fundamental Python',
    issuer: 'Coding Studio',
    link: 'https://member.codingstudio.id/certificate/77DF9A3B75-77DF6CEBD0-75BB3DD378' // Ganti dengan link sertifikat Anda
  },
  // Tambahkan sertifikasi lain di sini
];

const Certification = () => {
  return (
    <section id="certification">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.grid}>
        {certifications.map((cert, index) => (
          <a 
            href={cert.link} 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.card}
          >
            <h3>{cert.name}</h3>
            <p>{cert.issuer}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certification;