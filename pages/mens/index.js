import Link from "next/link";
import styles from "./mens.module.css";
import data from "../../utils/data"
import ProductItem from "../../components/ProductItem/ProductItem";



const Mens = () => {
  return (
    <main className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 mx-5">
      {data.products.map(product => {
    return (
      <ProductItem product={product} key={product.slug}></ProductItem>
    )
  })}
    </main>
  );
};

export default Mens;
