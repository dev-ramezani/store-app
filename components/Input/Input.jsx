import React from 'react'

const Input = ({ placeholder, onChange }) => {
   const handleOnChange = (event) => {
      onChange(event)
   }

   return (
      <>
         <div>
            <input placeholder={placeholder} onChange={handleOnChange} /> 
         </div>
         <style jsx>{`
            div{
               width: 100%;
            }

            input{
               width:100%;
               padding:8px;
               height:3rem;
               border-radius:2px;
               position:relative;
               display:inline-block;
               text-decoration:none;
               border:1px solid black;
            }
         `}</style>
      </>
   )
}

export default Input