import LayoutPage from './LayoutPage'
import React, { useState } from 'react'
import { H2, Paragraph, Delete } from '../components'

export default function Detail({ product }){
   const percent_payable = product.is_discount ? 1 - ( product.discount / 100 ) : 1
   const [id,setId] = useState(0)

   return(
      <>
         <LayoutPage>
            <section>
               <H2 align='center' gap='25px'>{product.name}</H2>
               <img src={product.image} alt={product.name} />
               { product.model && <Paragraph align='center' gap='25px'>مدل: {product.model}</Paragraph> }
               { product.package && <Paragraph align='center' gap='25px'>نوع بسته بندی: {product.package}</Paragraph> }
               { product.binding_type && <Paragraph align='center' gap='25px'>نوع صحافی: {product.binding_type}</Paragraph> }
               { product.binding_form && <Paragraph align='center' gap='25px'>فرم صحافی: {product.binding_form}</Paragraph> }
               { product.body_material && <Paragraph align='center' gap='25px'>جنس بدنه: {product.body_material}</Paragraph> }
               { product.cover_material && <Paragraph align='center' gap='25px'>جنس جلد: {product.cover_material}</Paragraph> }
               { product.tip_thickness && <Paragraph align='center' gap='25px'>ضخامت نوک: {product.tip_thickness}</Paragraph> }
               { product.tip_hardness && <Paragraph align='center' gap='25px'>سختی نوک: {product.tip_hardness}</Paragraph> }
               { product.tip_type && <Paragraph align='center' gap='25px'>نوع نوک: {product.tip_type}</Paragraph> }
               { product.available_colors_en && 
                  <>
                     <Paragraph align='center' gap='25px'>رنگ انتخابی: {product.available_colors_fa[id]}</Paragraph>
                     <Paragraph align='center' gap='25px'>رنگ بندی:</Paragraph>
                     <Paragraph align='center' gap='25px'>
                        {
                           product.available_colors_en.map((color, index) => (
                              <span 
                                 className={ index == id && "active"} 
                                 style={{ backgroundColor: color }} 
                                 onClick={() => setId(index)} 
                                 key={index}
                              />
                           ))
                        }
                     </Paragraph>
                  </>
               }
               { product.is_discount && <Delete align='center' gap='25px'>قیمت قبلی: {product.price[id]} تومان </Delete> }
               { product.price && <Paragraph align='center' gap='25px'>قیمت: {Math.round(product.price[id]*percent_payable)} تومان</Paragraph> }
            </section>
         </LayoutPage>
         <style jsx>{`
            section{
               width:100%;
               max-height:auto;
               min-height:730px;
            }

            img{
               float:left;
               margin:20px;
               width:500px;
               height:580px;
            }

            span{
               width:40px;
               margin:5px;
               height:40px;
               border-radius:20px;
               display:inline-block;
               border:1px solid gray;
            } 

            span.active{
               border:3px solid #c23616;
            }

            @media (min-width: 750px) and (max-width: 768px){
               img{
                  width:360px;
                  height:600px;
                  margin:20px;
               }
            }

            @media (max-width: 750px){
               section{
                  display:flex;
                  flex-direction:column;
               }

               img{
                  width:280px;
                  height:380px;
                  margin:20px auto;
               }
            }
         `}</style>
      </>
    )
}
