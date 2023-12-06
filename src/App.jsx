import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'


function App() {
  let [cart, setCart] = useState(0)
  const products = [{
    name: "T-shirt"
  },
  {
    name: "Trouser"
    },
    {
      name: "Hoodie",
    },
    {
      name: "Neck T-shirt",
    }]
  return <>                                                                                                                                                      
    <Navbar cart={cart} setCart={setCart} />
    
    <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
            products.map((e, i) => {
              return <Card cart={cart} setCart={setCart} products={e} key={i} />
            })
          
          }
          </div>
      </div>
      </section>
  
  </>
}

export default App