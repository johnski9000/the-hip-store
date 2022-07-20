import PlaceHolder from "../../components/Header/HeaderPlaceHolder";
import styles from "./mens.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return {
    props: { items: data },
  };
};

const Mens = ({ items }) => {
  const products = items.products;
  function getData() {
    console.log(products);
  }
  return (
    <div className={styles.mainWrapper}>
      <PlaceHolder />
      
      <h1 onClick={() => getData()}>Mens</h1>
      <div  className={styles.mensWrapper}> 
      {products.map((product) => (
        <div className={styles.productCard} key={product.id}>
        
          <img src={product.thumbnail} alt="" />
          <div className={styles.productContent}>
          <h4>{product.title}</h4>
          <h5>{product.description}</h5>
          <p>Rating: {product.rating}/5</p>
          <p>£{product.price}</p>
          </div>
          <a href={"http://localhost:3000/mens/" + product.id}>
          <button>View product</button>
          </a>
          <button>Add to cart</button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Mens;
