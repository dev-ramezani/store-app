import Head from 'next/head'
import { useRouter } from 'next/router'
import Detail from '../../containers/detail'
import React, { useState, useEffect } from 'react'
import LayoutPage from '../../containers/LayoutPage'
import products from '../../public/Products/products.json'

export default function product() {
  const router = useRouter()
  const slug = router.query.products
  const [data, setData] = useState([])
  const [found, setFound] = useState(false)
  const [product,setProduct] = useState({})

  useEffect(() => {
    setData(products);
  },[]);

  useEffect(() => {
    if ( data.length > 0 ) {  
      data.map((products) => {
        if ( products.slug == slug ) { 
          setFound(true)
          setProduct(products) 
        }
      })
    }
  })

  return (
    <>
      <Head>
        <title>فروشگاه اینترنتی لوازم التحریر</title>
      </Head>
      <LayoutPage>
        { found === false ? <div><h1 className='next-error-h1'>404</h1><hr/><h2>This product could not be found</h2></div> : <Detail product={product} /> }
      </LayoutPage>
      <style jsx>{`
        div{
          height: 97vh;
          display:flex;
          text-align:center;
          align-items:center;
          flex-direction:row;
          font-family:system-ui;
          justify-content:center
        }

        h1{
          font-size: 24px;
          font-weight: 500;
          padding-right: 0px;
          vertical-align: top;
          display: inline-block;
        }

        hr{
          margin: 0px;
          width: 45px;
          padding: 0px;
          height: 0.01px;
          background-color: black;
          transform: rotate(90deg);
        }

        h2{
          font-size: 14px;
          font-weight: 400;
          line-height: 28px;
          padding-left: 0px;
          display: inline-block;
        }
      `}</style>
    </>
  )
}
