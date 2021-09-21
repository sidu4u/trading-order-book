import "./styles.css";

const SellContainer = ({ sellBids }) => {
  return (
    <div className="sellContainer">
      {sellBids.map(({ id, size, price }) => (
        <div key={id} className="sellBid">
          <div>{size}</div>
          <div className="sellPrice">{price}</div>
        </div>
      ))}
    </div>
  );
};

export default SellContainer;
