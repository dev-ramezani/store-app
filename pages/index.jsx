import 'swiper/css'
import Head from 'next/head'
import 'swiper/css/pagination'
import { H2 } from '../components'
import Card from '../containers/productCard'
import LayoutPage from '../containers/LayoutPage'
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import productData from '../public/Products/products.json'

export default function Home() {
   const [products, setProducts] = useState([])

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
            <div className='x-large'>
               <Swiper
                  autoplay={{ delay: 5000, disableOnInteraction: false, }}
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{ clickable: false }}
                  modules={[Pagination, Autoplay]}
                  style={{ minHeight: '320px', }}
                  className="mySwiper"
               >
                  { products && products.map((product) => ( product.is_discount && 
                     <SwiperSlide key={product.id}>
                        <Card data={product} from='home' /> 
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
            <div className='large'>
               <Swiper
                  autoplay={{ delay: 5000, disableOnInteraction: false, }}
                  slidesPerView={2}
                  spaceBetween={30}
                  pagination={{ clickable: false }}
                  modules={[Pagination, Autoplay]}
                  style={{ minHeight: '320px', }}
                  className="mySwiper"
               >
                  { products && products.map((product) => ( product.is_discount && 
                     <SwiperSlide key={product.id}>
                        <Card data={product} from='home' /> 
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
            <div className='small'>
               <Swiper
                  autoplay={{ delay: 5000, disableOnInteraction: false, }}
                  slidesPerView={1}
                  spaceBetween={30}
                  pagination={{ clickable: false }}
                  modules={[Pagination, Autoplay]}
                  style={{ minHeight: '320px', }}
                  className="mySwiper"
               >
                  { products && products.map((product) => ( product.is_discount && 
                     <SwiperSlide key={product.id}>
                        <Card data={product} from='home' /> 
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
            <H2 align='center'>پر فروش ترین ها</H2>
            <div className='x-large'>
               <Swiper
                  autoplay={{ delay: 5000, disableOnInteraction: false, }}
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{ clickable: false }}
                  modules={[Pagination, Autoplay]}
                  style={{ minHeight: '320px', }}
                  className="mySwiper"
               >
                  { products && products.map((product) => ( product.is_best_seller && 
                     <SwiperSlide key={product.id}>
                        <Card data={product} from='home' /> 
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
            <div className='large'>
               <Swiper
                  autoplay={{ delay: 5000, disableOnInteraction: false, }}
                  slidesPerView={2}
                  spaceBetween={30}
                  pagination={{ clickable: false }}
                  modules={[Pagination, Autoplay]}
                  style={{ minHeight: '320px', }}
                  className="mySwiper"
               >
                  { products && products.map((product) => ( product.is_best_seller && 
                     <SwiperSlide key={product.id}>
                        <Card data={product} from='home' /> 
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
            <div className='small'>
               <Swiper
                  autoplay={{ delay: 5000, disableOnInteraction: false, }}
                  slidesPerView={1}
                  spaceBetween={30}
                  pagination={{ clickable: false }}
                  modules={[Pagination, Autoplay]}
                  style={{ minHeight: '320px', }}
                  className="mySwiper"
               >
                  { products && products.map((product) => ( product.is_best_seller && 
                     <SwiperSlide key={product.id}>
                        <Card data={product} from='home' /> 
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </LayoutPage>
         <style jsx>{`
            div{ text-align:center; }

            @media (min-width: 1480px) {
               div.x-large{ display:block; }
               div.large{ display:none; }
               div.small{ display:none; }
            }

            @media (min-width: 970px) and (max-width: 1480px) {
               div.x-large{ display:none; }
               div.large{ display:block; }
               div.small{ display:none; }
            }

            @media (min-width: 320px) and (max-width: 970px) {
               div.x-large{ display:none; }
               div.large{ display:none; }
               div.small{ display:block; }
            }
         `}</style>
      </>
   )
}
