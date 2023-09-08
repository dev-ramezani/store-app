import Cookies from 'universal-cookie'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { H3, Paragraph, Delete, Button } from '../components'
import { UPDATE_CART_ACTION, REMOVE_FROM_CART_ACTION } from '../actions'

export default function Card({item, product, setInDelete}) {
   const color_id = item.color_id
   const percent_payable = product.is_discount ? 1 - ( product.discount / 100 ) : 1
   const amount_payable = product.price[color_id] * percent_payable
   const { lock } = useSelector((state) => state.cart )
   const [counter,setCounter] = useState(item.number)
   const totalPrice = counter * amount_payable
   const dispatch = useDispatch()
   const cookies = new Cookies()

   const handleCounter = (status) => {
      if(cookies.get('user_id')){
         const product_id = item.id
         const user_id = cookies.get('user_id')
         if( status === 'increase' ){
            const product_change = { number: counter+1 }
            dispatch(UPDATE_CART_ACTION(user_id,product_id,product_change))
            setCounter(counter+1)
         }
         else if( status === 'decrease' ){
            const product_change = { number: counter-1 }
            dispatch(UPDATE_CART_ACTION(user_id,product_id,product_change))
            setCounter(counter-1)
         }
         else if( status === 'delete' ){
            dispatch(REMOVE_FROM_CART_ACTION(user_id,product_id))
            setInDelete(true)
         }
      }
   }

   return (
      <>
         <article>
            <div className='right'>
               <img className='product' src={`${product.image}`} />
               <div>
                  <H3>{product.name}</H3>
                  <div className='bottom'>
                     <Paragraph>فی: {amount_payable} تومان</Paragraph>
                     <Paragraph>قیمت کل: {totalPrice} تومان</Paragraph>
                     { product.is_discount && <Delete>قیمت قبلی: {product.price[color_id]} تومان</Delete> }
                  </div>
               </div>
            </div>
            <div className='left'>
               { product.available_colors_fa && <span className='color'>{product.available_colors_fa[color_id]}</span> }
               { product.is_discount && <span className='discount'>{product.discount}%</span> }
               <div className='counter'>
                  { !lock && 
                     <Button buttonModel='secondary' onClick={() => handleCounter('increase')} noBackground>
                        <img className='icon' src='/Icons/plus.jpg'/>
                     </Button>
                  }
                  { lock &&
                     <Button buttonModel='secondary' disabled noBackground>
                        <img className='icon' src='/Icons/lock.gif' />
                     </Button>
                  }
                  <Paragraph>{counter}</Paragraph>
                  { !lock && counter <= 1 && 
                     <Button buttonModel='secondary' onClick={() => handleCounter('delete')} noBackground>
                        <img className='icon' src='/Icons/garbage.png'/>
                     </Button>
                  }
                  { !lock && counter > 1 && 
                     <Button buttonModel='secondary' onClick={() => handleCounter('decrease')} noBackground>
                        <img className='icon' src='/Icons/minus.png'/>
                     </Button>
                  }
                  { lock &&
                     <Button buttonModel='secondary' disabled noBackground>
                        <img className='icon' src='/Icons/lock.gif' />
                     </Button>
                  }
               </div>
            </div>
         </article>
         <style jsx>{`
            article{
               width:100%;
               display:flex;
               font-size:14px;
               position:relative;
               border-radius:8px;
               border:2px solid darkgreen;
               box-shadow:1px 1px 16px lightgreen;
            }

            span{
               left:0px;
               width:60px;
               color:white;
               height:30px;
               padding:5px;
               font-size:1rem;
               padding-left:0px;
               position:absolute;
               text-align:center;
               background-color:#1abc9c;
               border-top-right-radius:20px;
               border-bottom-right-radius:20px;
            }

            span.color{
               padding-top:3px;
               padding-right:8px;
               top:${product.is_discount ? '55px' : '13px'};
            }

            span.discount{
               top:13px;
               padding:5px;
            }

            div.counter{
               display:flex;
               align-items:center;
               justify-content:center;
            }

            img.icon{
               width:20px;
               height:20px;
            }

            @media (min-width: 673px){
               article{
                  height:200px;
                  max-width:1000px;
                  margin:0px auto 30px;
                  padding:0px 30px 15px 65px;
                  justify-content:space-between; 
               }

               img.product{
                  float:right;               
                  width:185px;
                  height:185px;
                  padding-top:18px;
                  padding-left:18px;
               }

               div.right{
                  display:flex;
                  flex-direction:row;
                  justify-content:flex-start;
               }
   
               div.bottom{
                  margin-top:${ !product.is_discount && '60px' }
               }
   
               div.left{
                  display:flex;
                  margin-top:150px;
                  justify-content:flex-end;
               }
            }

            @media (min-width: 320px) and (max-width: 673px){
               article{ 
                  padding:10px;
                  max-width:400px;
                  align-items:center;
                  margin:0px auto 50px;
                  flex-direction:column;
               }

               img.product{
                  width:200px;
                  height:200px;
               }

               div{ margin:10px 0px; }

               div.right,div.bottom{
                  display:flex;
                  align-items:center;
                  flex-direction:column;
               }
            }
         `}</style>
      </>
   )
}
