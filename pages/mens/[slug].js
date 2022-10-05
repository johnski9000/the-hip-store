import React, { useContext } from "react";
import axios from 'axios';
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Store } from "../../utils/store";
import db from "../../utils/db";
import Product from "../../models/Product";
import { toast } from 'react-toastify';


function MensSlug(props) {
  const {state, dispatch} = useContext(Store)
  const {product} = props;
  const router = useRouter();

  const  addToCartHandler = async() => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }
    dispatch({type:"CART_ADD_ITEM", payload:{...product, quantity}})
    toast.success('Product updated in the cart');
  }

  if (!product) {
    return (
        <>
          <div className="ml-8 italic">Product not found</div>
        </>
    )
  }
  return (
    <main className="mx-5 mb-10">
      <div className="py-3 ">
        <Link href="/mens/" >back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.description}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div className="md:col-span-1">
          <ul>
            <li>{product.title}</li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? "In stock" : "Unavailable"}</div>
            </div>
            <button className="primary-button w-full" onClick={addToCartHandler} >Add to cart</button>
          </div>
        </div>
      </div>
      </main>
    );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const {params} = context;
  const {slug} = params
  await db.connect();
  const product = await Product.findOne({slug}).lean()
  await db.disconnect();

  // Pass data to the page via props
  return {
    props:{
      product: product ? db.convertDocToObj(product) : null,
    }
  }
}


export default MensSlug;
