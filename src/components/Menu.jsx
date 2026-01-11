import Pizza from "./Pizza";

export default function Menu({ pizzaData }) {
  return (
    <main style={styles.main}>
      <h2 style={styles.mainTitle}>Our Menu</h2>

      {pizzaData.length > 0 ? (
        <>
          <p style={{ textAlign: "center", marginBottom: "1rem" }}>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul style={styles.gridContainer}>
            {pizzaData.map((pizza, id) => (
              <Pizza pizza={pizza} key={id} />
            ))}
          </ul>
        </>
      ) : (
        <p style={styles.mainTitle}>
          We are out of stock at the moment come back later :)
        </p>
      )}
    </main>
  );
}

const styles = {
  main: {
    padding: "1rem",
  },

  mainTitle: {
    textAlign: "center",
  },
  gridContainer: {
    listStyleType: "none",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 30,
    padding: "20px 0",
  },
  pizza: {},
  pizzaImageUrl: { display: "block", width: "100%" },
};
