import React from 'react'

const Button = ({ children, widthAll }) => {
   return (
      <>
         <div>
            <button>{children}</button> 
         </div>
         <style jsx>{`
            div{
               width: 100%;
               text-align:${ !widthAll && 'center'};
            }

            button{
               border:2px;
               color:white;
               padding:15px;
               font-size:1.1;
               cursor:pointer;
               font-size:18px;
               position:relative;
               border-radius:16px;
               display:inline-block;
               text-decoration: none;
               background-color:#e74c3c;
               transition-duration: 0.4s;
               width:${ widthAll ? '100%' : 'auto' };
            }

            button:hover{
               box-shadow: 0px 0px 12px gray;
            }
         `}</style>
      </>
   )
}

export default Button