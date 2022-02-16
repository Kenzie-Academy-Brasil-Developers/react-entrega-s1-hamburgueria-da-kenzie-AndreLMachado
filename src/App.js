import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./Components/ProductsList/indedx";
import Cart from "./Components/Cart";
import logo from "./assets/img/logo.png";
import Product from "./Components/Product";
import ProductListCart from "./Components/ProductListCart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [valueInput, setValueImput] = useState(null);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  const TotalMoney = () => {
    return (
      <span className="valueCar">
        {currentSale
          .reduce((acc, product) => acc + Number(product.price), 0)
          .toFixed(2)}
      </span>
    );
  };

  const showProducts = () => {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[^a-z'\s]+/g, "")
            .indexOf(
              valueInput.value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[^a-z'\s]+/g, "")
            ) > -1 ||
          product.category
            .toLowerCase()
            .normalize("NFD")
            .replace(/[^a-z'\s]+/g, "")
            .indexOf(
              valueInput.value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[^a-z'\s]+/g, "")
            ) > -1
      )
    );
  };

  const handleclick = (product) => {
    const teste = currentSale.filter((item) => {
      return item.id === product.id;
    });
    console.log(teste);

    teste.length === 0
      ? setCurrentSale([...currentSale, product])
      : console.log("produto ja adicionado");
  };

  return (
    <div className="App">
      <header>
        <div className="App-header">
          <img className="logo" src={logo} alt="logo"></img>
          <div className="pesquisaDiv">
            <input
              className="inputPesquisa"
              type="text"
              placeholder="Digitar Pesquisa"
              ref={setValueImput}
              onChange={(event) => {
                showProducts(event.target.value);
              }}
            ></input>
            <button
              className="buttonPesquisa"
              onClick={() => showProducts(valueInput)}
            >
              Pesquisar
            </button>
          </div>
        </div>
      </header>
      <div className="vitrineCarrinhoDesktop">
        <ProductList
          products={filteredProducts.length === 0 ? products : filteredProducts}
          handleclick={handleclick}
        />
        <Cart
          currentSale={currentSale}
          TotalMoney={TotalMoney}
          setCurrentSale={setCurrentSale}
        />
      </div>
    </div>
  );
}

export default App;
