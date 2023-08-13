import Head from 'next/head'
import { H2 } from '../components'
import Card from '../containers/Card'
import Carousel from 'react-elastic-carousel'
import LayoutPage from '../containers/LayoutPage'
import React, { useState, useEffect } from 'react'
import productData from '../public/Products/products.json'

const breakPoints = [
   { width: 0, itemsToShow: 0 },
   { width: 600, itemsToShow: 1, itemsToScroll: 1 },
   { width: 900, itemsToShow: 2 },
   { width: 1400, itemsToShow: 3 },
   { width: 1800, itemsToShow: 4 },
   { width: 2300, itemsToShow: 5 }
];

export default function Home() {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      setProducts(productData);
   }, []);

   return (
      <>
         <Head>
            <title>فروشگاه اینترنتی لوازم التحریر</title>
         </Head>
         <LayoutPage>
            <H2 align='center'>تخفیف ویژه این هفته</H2>
            <div className='slideshow'>
               <Carousel breakPoints={breakPoints}>
                  { products && products.map((product) => ( product.is_discount && <Card key={product.id} data={product} from='home'  /> )) }
               </Carousel>
            </div>
            <div className='normal'>
               { products && products.map((product) => ( product.is_discount && <Card key={product.id} data={product} from='home'  /> )) }
            </div>
            <H2 align='center'>پر فروش ترین ها</H2>
            <div className='slideshow'>
               <Carousel breakPoints={breakPoints}>
                  { products && products.map((product) => ( product.is_best_seller && <Card key={product.id} data={product} from='home'  /> )) }
               </Carousel>
            </div>
            <div className='normal'>
               { products && products.map((product) => ( product.is_best_seller && <Card key={product.id} data={product} from='home'  /> )) }
            </div>
         </LayoutPage>
         <style jsx>{`
            div.normal{ display:none; }
            
            @media (min-width: 100px) and (max-width: 720px){
               div.slideshow{ display:none; }

               div.normal{
                  display:flex;
                  flex-wrap:wrap;
                  justify-content:center;
               }
            }
         `}</style>
      </>
   )
}
