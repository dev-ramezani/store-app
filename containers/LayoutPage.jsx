import React from 'react'
import { LOGOUT_ACTION } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { H2, H3, Paragraph, Hyperlink, Button } from '../components'

const LayoutPage = ({ children }) => {
   const dispatch = useDispatch()
   const auth = useSelector((state) => state.auth)
 
   const handleLogOut = () => {
      dispatch(LOGOUT_ACTION())
   }

   return (
      <>
         <header>
            <nav>
               { !auth || !auth.logged && 
                  <div>
                     <span>
                        <Hyperlink href='/register'>
                           <Button>ثبت نام</Button>
                        </Hyperlink>
                     </span>
                     <Hyperlink href='/login' type='secondary'>ورود</Hyperlink>
                  </div>
               }
               { auth && auth.logged && 
                  <>
                     <div>
                        <Button onClick={handleLogOut}>خروج</Button>
                     </div>
                     <Hyperlink href='/cart'>
                        <div>
                           <Paragraph gap='0.3rem' type='secondary'>0 تومان</Paragraph>
                           <img className='cart' src='/Icons/shopping_cart.png' />
                        </div>
                     </Hyperlink>
                  </>
               }
               <div className='title'>
                  <H2>
                     <Hyperlink href='/' type='secondary'>
                        فروشگاه اینترنتی لوازم التحریر مهر
                     </Hyperlink>
                  </H2>
               </div>
               <div className='logo'>
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
               background-color:#2ecc71; 
            }

            div, nav{
               display:flex;
               font-size:20px;
               padding:0px 8px;
               text-align:center;
               align-items:center;
               flex-direction:row-reverse;
               justify-content:space-around;
            }

            span{
               margin-right:50px;
            }

            menu{
               display:flex;
               font-size:20px;
               padding:20px 0px;
               justify-content:space-around;
            }

            img.cart{
               width:45px;
               height:45px;
               margin-left:0.9rem;
            }

            img.logo{
               width:250px;
               height:150px;
               padding:40px 20px 15px;
            }

            footer{
               padding-bottom:20px;
            }

            @media (min-width: 320px) and (max-width: 992px) {
               div.title{
                  display:none;
               }
            }

            @media (min-width: 320px) and (max-width: 485px){
               nav{
                  padding:25px 0px 15px;
               }

               span{
                  margin-right:30px;
               }

               div.logo{ 
                  display:none;
               }
            }
         `}</style>
      </>
   )
}

export default LayoutPage
