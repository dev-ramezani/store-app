import React, { useState } from 'react'

export default function detail({ product }){
   const percent_payable = product.status == "discounted" ? 1 - ( product.discount / 100 ) : 1
   const [id,setId] = useState(0)

   return(
      <>
         <main>
            <h1>{product.name}</h1>
            { product.discount != 0 && <span>Special discount : {product.discount}%</span> }
            <img src={product.image} alt={product.name} />
            <section>
               { product.model && <p>Model: {product.model}</p> }
               { product.package && <p>Package type: {product.package}</p> }
               { product.body_material && <p>Body material: {product.body_material}</p> }
               { product.tip_thickness && <p>Tip thickness: {product.tip_thickness}</p> }
               { product.tip_type && <p>Tip type: {product.tip_type}</p> }
               { product.available_colors && 
                  <div>
                     <p className='color'>Selected color: {product.available_colors[id]}</p>
                     <p>Coloring: </p>
                     <p>
                        {
                           product.available_colors.map((color, index) => (
                              <button 
                                 className={ index == id && "active"} 
                                 style={{ backgroundColor: color }} 
                                 onClick={() => setId(index)} 
                                 key={index}
                              />
                           ))
                        }
                     </p>
                  </div>
               }
               { product.status == "discounted" && <p className='oprice'>Last Price: {product.price[id]} Toman </p> }
               { product.price && <p>Price: {Math.round(product.price[id] * percent_payable)} Toman</p> }
            </section>
         </main>
         <style jsx>{`
            h1{ font-weight: 300; }

            span{
               top: 15px;
               left: 70px;
               color: white;
               height: 20px;
               padding: 15px;
               color: #e74c3c;
               position: fixed;
               border-radius: 20px;
               border: 3px solid #e74c3c;
            }

            img{
               float: left;
               width: 530px;
               height: 610px;
            }
            
            p{
               margin: 39px;
               font-size: 16px;
               text-align: center;
            }

            .color{
               margin-bottom: -30px;
            }

            .oprice{
               color: #EA2027;
               margin-bottom: -25px;
               text-decoration: line-through;
            }

            div{
               margin: 10px auto;
            }

            button{
               width: 40px;
               height: 40px;
               display: inline;
               margin: -35px 5px;
               border-radius: 20px;
               border: 1px solid gray;
            }  

            button.active{ border: 3px solid #c23616; }

            @media (min-width: 320px) and (max-width: 768px ) {  
               main{
                  display: flex;
                  flex-wrap: wrap;
                  flex-direction: column;
                  justify-content: center;
               }

               h1{ text-align: center; }
               img{ margin: 10px auto; }
               span{ display: none; }
            }

            @media (min-width: 768px) { 
               h1{
                  margin: 0px;
                  margin-top: 20px;
                  text-align: center;
                  margin-bottom: 10px;
               }

               section{
                  display: flex;
                  flex-wrap: wrap;
                  flex-direction: column;
                  justify-content: center;
               }
            }
         `}</style>
      </>
    )
}