import React from 'react'

const Alert = ({ children }) => {
   return (
      <>      
         <div>{children}</div>
         <style jsx>{`
            div{
               padding:4px;
               color:#c0392b;
               cursor:default;
               margin-bottom:10px;
               border-radius:20px;
               text-decoration:none;
               border:2px solid #c0392b;
               transition-duration:0.4s;
            }
         `}</style>
      </>

   )
}

export default Alert