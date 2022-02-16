import "./style.css";
import ProductCart from "../ProductCart";
const ProductListCart = ({ currentSale, setCurrentSale }) => {
  return (
    <>
      {" "}
      {currentSale.length > 0 && (
        <ul className="listaCarrinho">
          {currentSale.map((product) => (
            <ProductCart
              currentSale={currentSale}
              key={product.id}
              product={product}
              setCurrentSale={setCurrentSale}
              idProduto={product.id}
            />
          ))}
        </ul>
      )}{" "}
    </>
  );
};

export default ProductListCart;
