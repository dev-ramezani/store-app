import React from 'react'

const FormControl = ({ children }) => {
   return (
      <>
         <div>{children}</div>
         <style jsx>{`
            div{
               display: flex-block;
               padding: 16px;
            }
         `}</style>
      </>
   )
}

export default FormControl
