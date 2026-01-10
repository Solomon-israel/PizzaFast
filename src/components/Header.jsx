export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Fast React Pizza co.</h1>
    </header>
  );
}

const styles = {
  header: {
    background: "orange",
    color: "white",
    fontSize: 15,
    padding: "5px 10px",
  },
  title: { border: "1px solid", padding: "0 5px" },
};
