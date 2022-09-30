import React from 'react'
import {useRouter} from "next/router"

export default function unauthorized() {

    const router = useRouter()
    const {message} = router.query;
  return (
    <>
        <h1 className='text-xl ml-20'>
            Access Denied
        </h1>
        { message && <div className='mb-4 text-red-500 ml-20'>{message}</div>}
    </>
    
  )
}
