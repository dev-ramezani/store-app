import React from 'react'

const Button = ({ children }) => {
   return (
      <>
         <div>
            <button>{children}</button> 
         </div>
         <style jsx>{`
            div{
               width: 100%;
            }

            button{
               width:100%;
               border:2px;
               color:white;
               padding:16px;
               font-size:1.1;
               cursor:pointer;
               border-radius:2px;
               position: relative;
               display:inline-block;
               text-decoration: none;
               transition-duration: 0.4s;
               background-color:rgba(220, 221, 225,0.5);
            }

            button:hover{
               box-shadow:0 4px 16px rgba(0, 1, 31, 0.2);
            }
         `}</style>
      </>
   )
}

export default Button