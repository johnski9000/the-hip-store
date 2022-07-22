import Link from "next/link";
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
      <h1 onClick={() => getData()}>Mens</h1>
      <div className={styles.mensWrapper}>
        {products.slice(0, 12).map((product) => (
          <div className={styles.productCard} key={product.id} class="card">
            <Link href={"/mens/" + product.id}>
            <a>
            <img src={product.thumbnail} alt="" class="card-img-top" />
            <div className={styles.productContent} class="card-body">
              <h4 class="card-text">{product.title}</h4>
              <p class="card-text">{product.description}</p>
              <p class="card-text">Rating: {product.rating}/5</p>
              <p class="card-text">£{product.price}</p>
            </div>
            </a>
            </Link>
            <button type="button" class="btn btn-outline-secondary">Add to basket </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mens;
