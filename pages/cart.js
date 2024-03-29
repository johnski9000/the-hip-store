import Image from 'next/image';
import Link from 'next/link'
import React, { useContext } from 'react'
import {XCircleIcon} from "@heroicons/react/outline"
import { Store } from '../utils/store';
import dynamic from "next/dynamic"
import { useRouter } from 'next/router'
import axios from 'axios';
import { toast } from 'react-toastify';


function cart() {
  const router = useRouter()

  const {state, dispatch} = useContext(Store);
    const {
        cart: {cartItems},
    } = state
    const removeItemHandler = (item) => {
      dispatch({type:"REMOVE_CART_ITEM", payload: item})
      toast.success('Product removed from the cart');

  }
  const updateCartHandler = async(item, qty) => {
      const quantity = Number(qty);
      const { data } = await axios.get(`/api/products/${item._id}`);
      if(data.quantityInStock < quantity) {
        return toast.error('Sorry. Product is out of stock');
      }
      dispatch({type:"CART_ADD_ITEM", payload: {...item, quantity}})
      toast.success('Product updated in the cart');

  }
  return (
    <main className='px-5 py-2 min-h-screen'>
    <h1 className='mb-4 text-xl'>Shopping Cart</h1>
    {
     cartItems.length === 0 ? 
     (<div>
         Cart is empty. <Link href="/">Go Shopping</Link>
     </div>) :
     (<div className='grid md:grid-cols-4 md:gap-5'>
         <div className='overflow-x-auto md:col-span-3'>
             <table className='min-w-full'>
                 <thead className='border-b'>
                     <tr>
                         <th className="px-5 text-left">Item</th>
                         <th className="p-5 text-right">Quantity</th>
                         <th className="p-5 text-right">Price</th>
                         <th className="p-5">Action</th>
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
                                 <select value={item.quantity} onChange={(e) => updateCartHandler(item, e.target.value)}>
                                     {
                                         [...Array(item.countInStock).keys()].map((x) => (
                                             <option key={x+1} value={x+1}>
                                                 {x+1}
                                             </option>
                                         ))
                                     }
                                 </select>
                             </td>
                             <td className='text-right px-5'>£{item.price * item.quantity}</td>
                             <td className="p-5 flex justify-center"> 
                             <button onClick={() => removeItemHandler(item)}>
                                 <XCircleIcon className="h-6 w-6"></XCircleIcon>
                             </button>
                             </td>
                         </tr>
                     ))}
                 </tbody>
             </table>
         </div>
         <div className="card p-4 checkout">
         <ul className='px-0'>
           <li>
             <div className="pb-3 text-xl">
               Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
               {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
             </div>
           </li>
           <li>
             <button
               onClick={() => router.push('login?redirect=/shipping')}
               className="primary-button w-full"
             >
               Check Out
             </button>
           </li>
         </ul>
       </div>
     </div>)
    }
    </main>
  )
}

export default dynamic(() => Promise.resolve(cart), {ssr: false});