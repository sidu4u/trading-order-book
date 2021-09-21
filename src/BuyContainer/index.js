import "./styles.css";

const BuyContainer = ({ buyBids }) => {
  return (
    <div className="buyContainer">
      {buyBids.map(({ id, size, price }) => (
        <div key={id} className="buyBid">
          <div>{size}</div>
          <div className="buyPrice">{price}</div>
        </div>
      ))}
    </div>
  );
};

export default BuyContainer;
