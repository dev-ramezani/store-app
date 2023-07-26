import React from 'react'
import Link from 'next/link'

export default function menu({ ID }) {
  return (
    <>
      <header>
        <Link legacyBehavior href='/'>
          <a href='/' className={ ID == 1 ? 'active' : '' }>Home</a>
        </Link>
        <Link legacyBehavior href='/store'>
          <a href='/store' className={ ID == 2 ? 'active' : '' }>Store</a>
        </Link>
        <Link legacyBehavior href='/about'>
          <a href='/about' className={ ID == 3 ? 'active' : '' }>About us</a>
        </Link>
        <Link legacyBehavior href='/contact'>
          <a href='/contact' className={ ID == 4 ? 'active' : '' }>Contact us</a>
        </Link>
    </header>
    <style jsx>{`
      header {
        margin: -7px;
        padding: 17px 0px 7px;
        height: 30px;
        text-align: center;
        background-color: #EA2027;
      }

      a{
        color: white;
        font-size: 17px;
        text-decoration: none;
      }

      a:hover{
        color: #fed330;
      }

      .active{
        color: #f1c40f;
      }

      @media (min-width: 330px) {  
        a{
          margin: 0px;
          padding: 8px;
        }
      }

      @media (min-width: 576px) {  
        a{
          margin: 20px;
          padding: 10px;
        }
      }

      @media (min-width: 768px) { 
        a{
          margin: 30px;
          padding: 25px;
        }
      }

      @media (min-width: 992px) { 
        a{
          margin: 45px;
          padding: 40px;
        }
      }

      @media (min-width: 1200px) { 
        a{
          margin: 60px;
          padding: 50px;
        }
      }
      
      @media (min-width: 1600px) { 
        a{
          margin: 80px;
          padding: 85px;
          font-size: 25px;
        }
      }
    `}</style>
    </>
  )
}