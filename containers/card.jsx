import React from 'react'
import Link from 'next/link'

export default function Card({ data, type }){
  const percent_payable = data.status == "discounted" ? 1 - ( data.discount / 100 ) : 1

  return (
    <>
      <Link legacyBehavior href={`/store/${data.slug}`}>
        <div className={type}>
          { data.status == "discounted" &&<span>{data.discount}%</span> }
          <h3>{data.name}</h3>
          <img src={data.image} alt={data.name} />
          { data.status == "discounted" && <p className='oprice'>Last Price: {data.price[0]} Toman</p> }
          <p className='price'>Price: { Math.round( data.price[0] * percent_payable ) } Toman</p>
        </div>
      </Link>
      <style jsx>{`
        div{
          width: 250px;
          height: 328px;
          cursor: pointer;
          text-align: center;
          position: relative;
          border-radius: 25px;
          border: #EA2027 solid 3px;
          background-color: #ffeaa7;
        }

        .normal{ 
          padding: 10px;
          margin: 35px 15px 0px; 
        }
        
        .normal:hover{ 
          box-shadow: 2px 2px 10px gray; 
        }

        .discounted{ 
          margin: 8px; 
          padding: 6px;
        }

        span{
          top: ${ type == 'discounted' ? '44px' : '50px'};
          left: 0px;
          color: white;
          height: 20px;
          padding: 8px;
          position: absolute;
          background-color: #EE5A24;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }

        h3{
          color: black;
          display:block;
          font-weight: 400;
          font-size: 17.5px;
          padding-bottom: 10px;
          text-decoration: none;
          margin-block-end: 1em;
          margin-block-start: 1em;
        }

        img{
          width: 200px;
          height: 200px;
          border-radius: 35px;
          border: 2.5px solid #fed330;
        }

        .oprice{
          color: #EA2027;
          margin-top: 5px;
          margin-bottom: -12px;
          text-decoration: line-through;
        }

        .price{
          margin-top: 20px;
        }
      `}</style>
    </>
    )
}