import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import CheckoutWizard from "../components/CheckoutWizard/CheckoutWizard";
import { Store } from "../utils/store";
import Image from 'next/image';
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";
import { getError } from "../utils/error";


export default function PlaceOrderScreen() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems, shippingAddress, paymentMethod } = cart;
  
    const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

    const itemsPrice = round2(cartItems.reduce((a, c) => a + c.quantity * c.price, 0)) /// 123.4567 => 123.46
    const shippingPrice = itemsPrice > 200 ? 0 : 15;
    const taxPrice = round2(itemsPrice * 0.15)
    const totalPrice = round2(itemsPrice + shippingPrice + taxPrice)
    const router = useRouter()
    useEffect(() => {
      if(!paymentMethod) {
        router.push("/payment")
      }
    }, [paymentMethod, router])
    
    const [loading, setLoading] = useState(false)

    const placeOrderHandler = async() => {
        try {
            setLoading(true);
            const { data } = await axios.post('/api/orders', {
              orderItems: cartItems,
              shippingAddress,
              paymentMethod,
              itemsPrice,
              shippingPrice,
              taxPrice,
              totalPrice,
            });
            setLoading(false);
      dispatch({ type: 'CART_CLEAR_ITEMS' });
      Cookies.set(
        'cart',
        JSON.stringify({
          ...cart,
          cartItems: [],
        })
      );
      router.push(`/order/${data._id}`);
        } catch (err) {
            setLoading(false);
            toast.error(getError(err))
        }
    }

  return (
    <div>
      <CheckoutWizard activeStep={3} />
      <h1>Place Order</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping!</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflxo-x-auto md:col-span-3">
            <div className="card p-5">
              <h2 className="mb-2 text-lg">Shipping Address</h2>
              <div>
                {shippingAddress.fullName}, {shippingAddress.address},{" "}
                {shippingAddress.city}, {shippingAddress.postalCode},{" "}
                {shippingAddress.country}
              </div>
              <div className="mt-4">
                <Link href="/shipping">Edit</Link>
              </div>
            </div>
            <div className="card p-5">
                <h2 className="mb-2 text-lg">Payment Method</h2>
                <div>{paymentMethod}</div>
                <div className="mt-4">
                    <Link href="/payment">Edit</Link>
                </div>
            </div>
            <div className="card p-5">
                <h2 className="mb-2 text-lg">Order Items</h2>
                <table className='min-w-full'>
                <thead className='border-b'>
                     <tr>
                         <th className="px-5 text-left">Item</th>
                         <th className="p-5 text-right">Quantity</th>
                         <th className="p-5 text-right">Price</th>
                         <th className="p-5">Subtotal</th>
                     </tr>
                 </thead>
                 <tbody>
                     {cartItems.map((item) => (
                         <tr key={item.slug} className="border-b">
                             <td className='py-2'>
                                 <Link href={`/product/${item.slug}`}>
                                     <a className='flex items-center px-5  no-underline text-black'>
                                         <Image
                                             src={item.image}
                                             alt={item.name}
                                             width={50}
                                             height={50}
                                             
                                         ></Image>
                                         &nbsp;
                                         - {item.name}
                                     </a>
                                 </Link>
                             </td>
                             <td className='text-right px-5 h-20'>
                                {item.quantity}
                             </td>
                             <td className='text-right px-5'>£{item.price}</td>
                             <td className="p-5 flex justify-center"> 
                                £{item.price * item.quantity}
                             </td>
                         </tr>
                     ))}
                 </tbody>
                </table>
                <div className="mt-4"><Link href="/cart">Edit</Link></div>
            </div>
          </div>
          <div>
            <div className="card p-5">
                <h2 className="mb-2 text-lg">Order Summary
                    </h2>
                    <ul>
                        <li>
                            <div className="mb-2 flex justify-between">
                                <div>Items</div>
                                <div>${itemsPrice}</div>
                            </div>
                        </li>
                        <li>
                        <div className="mb-2 flex justify-between">
                                <div>Tax</div>
                                <div>${taxPrice}</div>
                            </div>
                            <div className="mb-2 flex justify-between">
                                <div>Shipping</div>
                                <div>${shippingPrice}</div>
                            </div>
                            <div className="mb-2 flex justify-between">
                                <div>Total</div>
                                <div>${totalPrice}</div>
                            </div>
                            <button
                            disabled={loading}
                            onClick={placeOrderHandler}
                            className="primary-button w-full"
                            >{loading ? "Loading..." : "Place Order"}</button>
                        </li>
                    </ul>
            </div>
        </div>
        </div>
      )}
    </div>
  );
}


PlaceOrderScreen.auth = true