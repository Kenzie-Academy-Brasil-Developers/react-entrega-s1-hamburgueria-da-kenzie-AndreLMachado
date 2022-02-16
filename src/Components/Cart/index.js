import "./style.css";
import ProductListCart from "../ProductListCart";
const Cart = ({ currentSale, TotalMoney, setCurrentSale }) => {
  return (
    <div className="cart">
      <h3 className="CarShop">Carrinho de compras</h3>
      <div className="displayCart">
        <div className="CarrinhoCompras">
          <ProductListCart
            className="listCart"
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </div>
        <div className="valorTotalCarrinho">
          <p className="pCar">Total</p>
          <TotalMoney />
        </div>
        <button className="RemoverTodos" onClick={() => setCurrentSale([])}>
          Remover Todos
        </button>
      </div>
    </div>
  );
};

export default Cart;
