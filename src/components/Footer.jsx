export default function Footer({ pizzaData }) {
  const date = new Date();
  const hrs = date.getHours();

  const isOpen = hrs > 12 ? hrs - 12 : hrs;
  const openHrs = 8;
  const closeHrs = 12;

  return (
    <footer style={styles.footer}>
      {isOpen < openHrs && isOpen > closeHrs ? (
        <p>
          We are happy to welcome you between {openHrs}:00 to {closeHrs}:00
        </p>
      ) : (
        <>
          <p style={styles.text}>
            We are open from {openHrs}:00 to {closeHrs}:00. Come visit us or
            order online
          </p>
          <span>we have {pizzaData.length} pizzas in store</span>

          <button>Order</button>
        </>
      )}
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "blue",
    fontSize: 15,
    padding: "1rem",
    marginTop: "auto",
    color: "white",
  },
  text: {},
};
