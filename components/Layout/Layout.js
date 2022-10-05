import { useSession, signOut } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Store } from "../../utils/store";
import Image from "next/image";
import Klarna from "../Klarna/Klarna";
import { Menu } from "@headlessui/react";
import DropdownLink from "../Dropdown/DropdownLink";

export default function Layout({ children }) {
  const { status, data: session } = useSession();
  const { state , dispatch} = useContext(Store);
  console.log(state)
  console.log(session)
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  
  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  return (
    <>
      <Head>
        {/* <title>{title ? title + ' - Amazona' : 'Amazona'}</title> */}
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md fixed z-10 bg-slate-50 w-full">
            <Link href="/">
              <a className="flex justify-center align-bottom">
                <Image
                  src="/logo.png"
                  alt="logo"
                  layout="fixed"
                  width={80}
                  height={18}
                />
              </a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2 no-underline">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg z-10">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">
                  <a className="p-2">Login</a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <Klarna />
        <main className="md:mt-28 mt-20 mainElement">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022 The Hip Store</p>
        </footer>
      </div>
    </>
  );
}
