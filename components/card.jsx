import React from 'react'
import Link from 'next/link'

export default function card({ data }){
  return (
    <>
      <Link legacyBehavior href={`/store/${data.slug}`}>
        <div>
          <h3>{data.name}</h3>
          <img src={data.image} alt={data.name} />
          <p>Price: {data.price}</p>
        </div>
      </Link>
      <style jsx>{`
        div{
          width: 250px;
          height: 328px;
          padding: 10px;
          cursor: pointer;
          text-align: center;
          border-radius: 25px;
          margin: 35px 15px 0px;
          border: #EA2027 solid 3px;
          background-color: #ffeaa7;
        }

        div:hover{
          box-shadow: 2px 2px 10px gray;
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

        p{
          padding: 4px; 
        }
      `}</style>
    </>
    )
}