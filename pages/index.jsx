import Head from 'next/head'
import Card from '../containers/card'
import LayoutPage from '../containers/LayoutPage'
import React, { useState, useEffect } from 'react'
import products from '../public/Products/products.json'

export default function Home() {
   const [data, setData] = useState([]);

   useEffect(() => {
      setData(products);
   }, []);

   return (
      <>
         <Head>
            <title>فروشگاه اینترنتی لوازم التحریر</title>
         </Head>
         <LayoutPage>
            <h2>Welcome to our online stationery store</h2>
            <p>This week's special discount:</p>
            <div>
               {data.length > 0 && (
                  <>
                     {data.map((products) => (
                        products.status == "discounted" && <Card key={products.id} data={products} type='discounted' />
                     ))}
                  </>
               )} 
            </div>
         </LayoutPage>
         <style jsx>{`
            div{
               width: auto;
               height: auto;    
               display: flex;
               padding: 25px;
               flex-wrap: wrap;
               margin: 15px auto;
               justify-content: center;
               background-color: #ff7979;
               border-top-left-radius: 80px;
               border-bottom-right-radius: 80px;  
            }

            div:hover{ box-shadow: 1px 1px 4px gray; }

            h2,p{
               font-size: 20px;
               text-align: center;
               margin: 55px 0px 45px;
               text-shadow: 1px 1px 2px black;
            }

            h2{ color: #EA2027; }
            p{ color: #ee5253; }

            @media (min-width: 768px) { 
               div{ width: 350px; }
            }
  
            @media (min-width: 992px) { 
               div{ width: 850px; }
            }
         `}</style>
      </>
   )
}
