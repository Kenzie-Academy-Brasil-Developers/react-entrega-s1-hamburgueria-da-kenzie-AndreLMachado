import "./style.css";
import Product from "../Product";
const ProductList = ({ products, handleclick }) => {
  return (
    <ul className="ListaVitrine">
      {products.map((product) => (
        <Product key={product.id} product={product} handleclick={handleclick} />
      ))}
    </ul>
  );
};

export default ProductList;
