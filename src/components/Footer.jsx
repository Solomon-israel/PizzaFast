export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>We are happy to welcome</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "blue",
    fontSize: 15,
    padding: "1rem",
    marginTop: "auto",
  },
  text: { color: "white" },
};
