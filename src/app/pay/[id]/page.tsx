"use client"

import React, { useEffect, useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions } from '@stripe/stripe-js';
import CheckoutForm from '@/components/CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const page = ({params}: {params: {id:string}}) => {

  const [clientSecret, setClientSecret] = useState("");

  const { id } = params;

  useEffect (() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/create-intent/${id}`, {
          method:"POST"
        })

        const data = await res.json()
        setClientSecret(data.clientSecret)
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, [id])

  const options:StripeElementsOptions = {
    clientSecret,
    appearance:{
      theme: 'stripe',
    }
  };

  return (
    <div className='px-56 pt-20'>
      <div>
        <div className='flex flex-col bg-red-100 rounded-[20px] border-4 border-red-400'>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default page