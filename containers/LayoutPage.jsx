import React from 'react'
import { H3, Paragraph, Hyperlink, Button } from '../components'

const LayoutPage = ({ children }) => {
   return (
      <>
         <header>
            <nav>
               <Hyperlink href='/cart'>
                  <div>
                     <Paragraph gap='0.3rem' type='secondary'>0 تومان</Paragraph>
                     <img className='cart' src='/Icons/shopping_cart.png' />
                  </div>
               </Hyperlink>
               <div>
                  <span>
                     <Hyperlink href='/register'>
                        <Button>ثبت نام</Button>
                     </Hyperlink>
                  </span>
                  <Hyperlink href='/login' type='secondary'>ورود</Hyperlink>
               </div>
               <div className='title'>
                  <H3>
                     <Hyperlink href='/' type='secondary'>
                        فروشگاه اینترنتی لوازم التحریر مهر
                     </Hyperlink>
                  </H3>
               </div>
               <div>
                  <Hyperlink href='/'>
                     <img className='logo' src='/Icons/logo.png' />
                  </Hyperlink>  
               </div>
            </nav>
            <menu>
               <Hyperlink href='/' type='secondary'>خانه</Hyperlink>
               <Hyperlink href='/store' type='secondary'>فروشگاه</Hyperlink>
               <Hyperlink href='/about' type='secondary'>درباره ی ما</Hyperlink>
               <Hyperlink href='/contact' type='secondary'>تماس با ما</Hyperlink>
            </menu>
         </header>
            {children}
         <footer>
            <H3 align='center'>از کارخانه تا خانه</H3>
            <Paragraph align='center'>با فروشگاه آنلاین لوازم التحریر مهر</Paragraph>
         </footer>
         <style jsx>{`
            header{
               background-color: #2ecc71; 
            }

            div, nav{
               display: flex;
               font-size: 20px;
               padding: 0px 8px;
               text-align: center;
               align-items: center;
               flex-direction: row-reverse;
               justify-content: space-around;
            }

            span{
               margin-right: 60px;
            }

            menu{
               display: flex;
               font-size: 20px;
               padding: 20px 0px;
               justify-content: space-around;
            }

            img.cart{
               width: 45px;
               height: 45px;
               margin-left: 0.9rem;
            }

            img.logo{
               width: 250px;
               height: 150px;
               padding: 20px;
            }

            footer{
               padding-bottom: 20px;
            }

            @media (min-width: 320px) and (max-width: 992px) {
               div{
                  margin-top: 20px;
               } 

               img.logo{
                  display: none;
               }
            }

            @media (min-width: 320px) and (max-width: 520px){
               div.title{ 
                  display: none;
               }
            }
         `}</style>
      </>
   )
}

export default LayoutPage
