import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Components/Mainn'
import Detail from '../Components/Detail/Detail'
import Snaks from '../Components/Snaks'
import VendorList from '../Components/Vendor'
import Whislist from '../Components/Wishlist'
import Shoplist from '../Components/Shoplist'
import Shopleft from '../Components/Shopleft'
import About from '../Components/About'
import ShopListLeft from '../Components/ShopListLeft'
import BlogCat from '../Components/BlogCat'


function Navigation() {
  return (

// All Navigations
<Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/detail' element={<Detail/>}/>
    <Route path='/Snals' element={<Snaks/>}/>
    <Route path='/Whislist' element={<Whislist/>}/>
    <Route path='/snaks' element={<Snaks/>}/>

    <Route path='/vendor' element={<VendorList/>}/>
    <Route path='/Shoplist' element={<Shoplist/>}/>
    <Route path='/Shopleft' element={<Shopleft/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/shoplistright' element={<ShopListLeft/>}/>
    <Route path='/Blog' element={<BlogCat/>}/>
</Routes>

    
  )
}

export default Navigation