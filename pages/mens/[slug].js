import { useRouter } from "next/router";
import PlaceHolder from "../../components/Header/HeaderPlaceHolder";
import Link from "next/link";
import data from "../../utils/data";
import { useContext } from "react";
import { Store } from "../../utils/store";



function MensSlug() {
  const {state, dispatch} = useContext(Store)
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug)

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find(x => x.slug === product.slug);
    const quantity = existItem ?  existItem.quantity += 1 : 1;
    dispatch({type:"CART_ADD_ITEM", payload:{...product, quantity}})
  }

  // if (!product) {
  //   return (
  //       <>
  //         <div>product not found</div>
  //       </>
  //   )
  // }
  return (
    <>
      <div className="py-3 ">
        <Link href="/" >back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          {/* <Image
            src={product.image}
            alt={product.description}
            width={640}
            height={640}
            layout="responsive"
          ></Image> */}
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
      </>
    );
}

export default MensSlug;
