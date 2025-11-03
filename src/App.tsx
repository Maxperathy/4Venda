import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout'
import Home from '@/pages/Home'
import AllVendors from '@/pages/AllVendors'
import Vendor from '@/pages/Vendor'
import ProductDetail from '@/pages/ProductDetail'
import Cart from '@/pages/Cart'
import SignIn from '@/pages/auth/SignIn'
import CreateAccount from '@/pages/auth/CreateAccount'
import Checkout from '@/pages/Checkout'
import OrderConfirmation from '@/pages/OrderConfirmation'
import VendorRegister from '@/pages/VendorRegister'
import VendorLogin from '@/pages/VendorLogin'
import VendorDashboard from '@/pages/VendorDashboard'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-vendors" element={<AllVendors />} />
        <Route path="/vendor/:slug" element={<Vendor />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/vendor/register" element={<VendorRegister />} />
        <Route path="/vendor/login" element={<VendorLogin />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Layout>
  )
}
