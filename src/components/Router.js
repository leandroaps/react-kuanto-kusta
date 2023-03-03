import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Loader from './Loader'

const Cart = React.lazy(() => import('../pages/Cart'))
const Details = React.lazy(() => import('../pages/Details'))
const Products = React.lazy(() => import('../pages/Products'))
const Error = React.lazy(() => import('../pages/Error'))

const Router = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </React.Suspense>
  )
}
export default Router
