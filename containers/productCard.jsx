import React from 'react'
import { Hyperlink, Paragraph, Delete } from '../components'

export default function Card({ data, from = 'store' }){
   const percent_payable = data.is_discount ? 1 - ( data.discount / 100 ) : 1

   return (
      <>
         <Hyperlink href={`/store/${data.slug}`}>
            <article>
               { data.is_discount && <span>{data.discount}%</span> }
               <img src={`${data.image}`} />
               <div>
                  <Paragraph align='center' gap='15px'>{data.name}</Paragraph>
                  { data.is_discount && <Delete align='center' gap='15px'>{data.price[0]} تومان</Delete> }
                  <Paragraph align='center' gap='15px'>{Math.round(data.price[0]*percent_payable)} تومان</Paragraph>
               </div>
            </article>
         </Hyperlink>
         <style jsx>{`
            article{
               margin:3px;
               width:450px;
               padding:5px;
               height:253px;
               cursor:pointer;
               text-align:center;
               position:relative;
               border:#c0392b solid ${from == 'store' ? '1px' : '2px'};
            }

            article:hover{
               box-shadow:${from == 'store' && '0px 0px 16px rgba(128, 128, 128, 0.4)'};
            }

            div{  
               display:flex;
               align-items:center;
               flex-direction:column;
               padding:${data.is_discount ? '45px 0px' : '70px 0px'};
            }

            img{
               float:left;
               width:238px;
               height:238px;
               padding:10px;
            }

            span{
               top:35px;
               left:0px;
               width:40px;
               color:white;
               height:40px;
               padding:5px;
               font-size:18px;
               padding-left:0px;
               position:absolute;
               background-color:#ffc048;
               border-top-right-radius:20px;
               border-bottom-right-radius:20px;
            }

            @media (min-width: 425px) and (max-width: 450px){
               article{ 
                  width:300px;
               }

               img{
                  width:150px;
               }
            }

            @media (min-width: 320px) and (max-width: 425px){
               article{ 
                  width:300px;
               }

               img{
                  width:150px;
               }
            }
         `}</style>
      </>
   )
}