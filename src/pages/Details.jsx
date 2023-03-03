import { useEffect, useState } from 'react';

const Cart = () => {
  const [Details, setDetails] = useState()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(async (res) => await res.json())
      .then((json) => {
        console.log(json)
        setDetails(json)
      })
  }, [])

  return (
    <>
      <h1>DETAILS</h1>
      <h2>{Details?.title}</h2>
      <p>{Details?.description}</p>
    </>
  )
}

export default Cart
