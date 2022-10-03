import Link from "next/link";
import ProductItem from "../../components/ProductItem/ProductItem";
import db from "../../utils/db";
import Product from "../../models/Product";



const Mens = ({products}) => {
  return (
    <main className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 mx-5">
      {products.map(product => {
    return (
      <ProductItem product={product} key={product.slug}></ProductItem>
    )
  })}
    </main>
  );
};
export async function getServerSideProps() {
  // Fetch data from external API
  await db.connect();
  const products = await Product.find().lean()
  
  // Pass data to the page via props
  return {props: {products:  products.map(db.convertDocToObj)}  }
}

export default Mens;
