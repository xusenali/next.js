export const metadata = {
  title: 'Home',
  description: 'salom'
}

export default function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.heading}>Xush kelibsiz!</h1>
      <p style={styles.text}>Bu Next.js asosidagi oddiy home sahifadir.</p>
    </main>
  );
}

const styles = {
  main: {
    minHeight: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  },
  heading: {
    fontSize: '36px',
    color: 'white'
  },
  text: {
    fontSize: '18px',
    color: 'white',
    margin: '20px 0'
  },
};
