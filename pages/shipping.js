import React from 'react'
import CheckoutWizard from '../components/CheckoutWizard/CheckoutWizard';
import { useForm } from "react-hook-form";


function ShippingScreen() {
    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
        getValues,
      } = useForm();
      const submitHandler = () => {
        
      }
  return (
    <div className='shipping'>
        <CheckoutWizard activeStep={1}/>
        <form
        className='mx-auto max-w-screen-md'
        onSubmit={handleSubmit(submitHandler)}
        >

        </form>
    </div>
  )
}

export default ShippingScreen;