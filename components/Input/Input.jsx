import React from 'react'

const Input = ({ children, textArea }) => {
   return (
      <>
         <div>
            <button>{children}</button> 
         </div>
         <style jsx>{`
            div{
               width: 100%;
            }

            input{
               width:100%;
               padding:8px;
               border-radius:2px;
               position:relative;
               display:inline-block;
               text-decoration:none;
               height:${ textArea ? '3rem' : '9rem' };
            }
         `}</style>
      </>
   )
}

export default Input