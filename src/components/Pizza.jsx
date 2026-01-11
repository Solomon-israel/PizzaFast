export default function Pizza({ pizza }) {
  return (
    <li style={styles.pizza} className={pizza.soldOut ? "sold-out" : ""}>
      <img
        src={pizza.photoName}
        alt={pizza.name}
        style={styles.pizzaImageUrl}
      />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        {pizza.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>cost ${pizza.price}</span>
        )}
      </div>
    </li>
  );
}

const styles = {
  soldOut: { color: "#888" },
  pizzaImageUrl: { display: "block", width: "100%", borderRadius: "5px" },
};
