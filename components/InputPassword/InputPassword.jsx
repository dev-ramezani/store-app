import React from 'react'
import Input from '../Input/Input'

const InputPassword = (props) => { 
   return(
      <>
         <div>
            <Input type='password' {...props} />
         </div>
         <style jsx>{`
            div{
               width: 100%;
            }
         `}</style>
      </>
   )
}

export default InputPassword