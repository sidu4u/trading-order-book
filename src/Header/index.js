import "./styles.css";

const Header = ({ buyClick, sellClick }) => {
  return (
    <div className="header">
      <button className="buyButton" onClick={buyClick}>
        Sell
      </button>
      <button className="sellButton" onClick={sellClick}>
        Buy
      </button>
    </div>
  );
};

export default Header;
