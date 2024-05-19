import React, { useState } from 'react'
import Headers from './Header'
import Banners from './Banner'
import Cards from './Card'
import Footer from './Footer'
import data from './product.json'
function App() {
  // console.log(data);
  let product=data;
  let [cart,setCart]=useState(0);
  console.log(cart)
  return <>
    {/* <!--Header--> */}
    <Headers cart={cart}/>
    <Banners/>
    {/* <!-- Navigation--> */}
    <section className="py-5">
            <div className="container px-4 px-lg-3 mt-5">
                <div className="row gx-4 gx-lg-3 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                product.map((e,index)=>{
                  return<Cards product={e} setCart={setCart} key={index}/>
                })
                }
                </div>
            </div>
    </section>
    <Footer></Footer>
  </>
}

export default App