import React from 'react'

const Input = ({ placeholder, value, type, disabled, onChange }) => {
   const handleOnChange = (event) => {
      onChange(event.target.value)
   }

   return (
      <>
         <div>
            <input 
               type={type} 
               value={value} 
               disabled={disabled}
               placeholder={placeholder} 
               onChange={handleOnChange} 
               autoComplete={ type == 'password' ? 'current-password' : '' } 
            /> 
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