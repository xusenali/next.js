const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <p style={styles.text}>© {new Date().getFullYear()} Barcha huquqlar himoyalangan</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    marginTop: '50px'
  },
  text: {
    margin: 0,
    fontSize: '14px'
  }
};

export default Footer;
