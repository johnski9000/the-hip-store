import Link from "next/link";
import ProductItem from "../../components/ProductItem/ProductItem";
import db from "../../utils/db";
import Product from "../../models/Product";
import { useContext } from "react";
import { Store } from "../../utils/store";
import axios from "axios";
import { toast } from 'react-toastify';



const Mens = ({products}) => {
  const {state, dispatch} = useContext(Store)
  const {cart} = state

  const  addToCartHandler = async(product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }
    dispatch({type:"CART_ADD_ITEM", payload:{...product, quantity}})
    toast.success('Product updated in the cart');
  }

  return (
    <main className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 mx-5">
      {products.map(product => {
    return (
      <ProductItem product={product} key={product.slug} addToCartHandler={addToCartHandler}></ProductItem>
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
