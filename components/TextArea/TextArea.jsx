import React from 'react'

const TextArea = ({ placeholder, onChange }) => {
   const handleOnChange = (event) => {
      onChange(event)
   }

   return (
      <>
         <div>
            <textarea placeholder={placeholder} onChange={handleOnChange} /> 
         </div>
         <style jsx>{`
            div{
               width: 100%;
            }

            textarea{
               width:100%;
               padding:8px;
               height:9rem;
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

export default TextArea