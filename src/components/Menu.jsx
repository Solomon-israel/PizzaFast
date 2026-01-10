import Pizza from "./Pizza";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function Menu() {
  return (
    <main style={styles.main}>
      <h2 style={styles.mainTitle}>Our Menu</h2>

      <>
        <p style={{ textAlign: "center", marginBottom: "1rem" }}>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>

        <ul style={styles.gridContainer}>
          {pizzaData.map((pizza, id) => (
            <Pizza pizza={pizza} key={id} />
          ))}
        </ul>
      </>
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
