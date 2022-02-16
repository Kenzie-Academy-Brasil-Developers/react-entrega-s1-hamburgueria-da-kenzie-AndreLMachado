import "./style.css";
//import RemoveCart from "../RemoveCart";
const ProductCart = ({ product, currentSale, setCurrentSale }) => {
  const removeCart = () => {
    setCurrentSale(currentSale.filter((item) => item.id !== product.id));
    console.log(currentSale);
  };

  return (
    <div>
      <li className="listCart">
        <div className="imageCardCart">
          <div className="centralizaCart">
            <img
              className="imgCardCart"
              src={product.img}
              alt={product.name}
            ></img>
          </div>
        </div>
        <div className="baixoCardCart">
          <h3 className="H3CardCart">{product.name}</h3>
          <span className="typeFiltroCart">{product.category}</span>
          <span className="spanPriceCart">{product.price.toFixed(2)}</span>
        </div>
        <button className="ButtonCardCart" onClick={removeCart}>
          Remover
        </button>
      </li>
    </div>
  );
};

export default ProductCart;
