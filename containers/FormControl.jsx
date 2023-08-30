import React from 'react'

const FormControl = ({ children }) => {
   return (
      <>
         <div>{children}</div>
         <style jsx>{`
            div{
               padding:10px;
               display:flex-block;
            }
         `}</style>
      </>
   )
}

export default FormControl
