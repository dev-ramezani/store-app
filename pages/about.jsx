import Head from 'next/head'
import Menu from '../components/menu'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function about() {
  return (
    <>
      <Head>
         <title>Online stationery store</title>
      </Head>
      <main className={inter.className}>
        <Menu ID={3} />
        <h1>About us</h1>
         <p>
            Mehr stationery was opened in 1370 with the aim of selling the best stationery in the world to you dear ones.<br/>
            With the spread of the Corona virus and the closure of many businesses, we decided to continue our business by 
            creating an internet website so that you can place your orders more easily than before. Of course, serving your 
            loved ones will be done in person as before.<br/> If the product you want is not available on the site, register your 
            request through the contact section. More products will be added to the site soon.
         </p>
         <img src='/stationery.jpg' alt='stationery-store' />
      </main>
      <style jsx>{`
         h1{
            margin: 50px;
            color: #d63031;
            font-weight: 400;
            text-align: center; 
         }

         p{
            color: #e74c3c;
            font-size: 18px;
            margin: 0px 3px;  
         }

         img{
            height: 350px;
            display: block;
            border-radius: 40px;
            margin: 50px auto 20px;
         }

         @media (min-width: 320px) {  
            img{ 
               height: 150px; 
               margin: 20px auto;
            }
         }

         @media (min-width: 375px) {  
            img{ 
               height: 185px; 
               margin: 35px auto;
            }
         }

         @media (min-width: 768px) {  
            img{ height: 350px; }
         }
      `}</style>
    </>
  )
}
