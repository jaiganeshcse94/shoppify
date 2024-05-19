import React,{useState} from 'react'
function Cards(props) {

  const [toogle, toggleItems] = useState(false);
 
  return <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Product image--> */}
          <img className="card-img-top" src={props.product.thumbnail} alt={props.product.title} width={223} height={150}/>
            {/* <!-- Product details--> */}
            <div className="card-body p-4">
              <div className="text-center">
                {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">{props.product.title}</h5>
                    {/* <!-- Product price--> */}
                      <p>Description: {props.product.brand}</p>
                      <strong>Rs {props.product.price}</strong>
                </div>
              </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  {
                    //toggleItems(prev=>!prev) between the true and false
                  toogle ? <button className="btn btn-outline-dark mt-auto" 
                  onClick={()=>{
                    toggleItems(prev=>!prev)
                    props.setCart(current=>current-1)
                  }}
                  >Remove from Cart</button>
                  : <button className="btn btn-outline-dark mt-auto" 
                  onClick={()=>
                    {
                      toggleItems(prev=>!prev)
                      props.setCart(current=>current+1)
                    }}
                  >Add to Cart</button>
                  }
                </div>
              </div>
          </div>
     </div>
}
  
export default Cards