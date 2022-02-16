import "./style.css";
const Product = ({ product, handleclick }) => {
  return (
    <li className={product.name}>
      <div className="imageCard">
        <div className="centraliza">
          <img className="imgCard" src={product.img} alt={product.name}></img>
        </div>
      </div>
      <div className="baixoCard">
        <h3 className="H3Card">{product.name}</h3>
        <span className="typeFiltro">{product.category}</span>
        <span className="spanPrice">{product.price.toFixed(2)}</span>
        <button className="ButtonCard" onClick={() => handleclick(product)}>
          Adicionar
        </button>
      </div>
    </li>
  );
};

export default Product;
