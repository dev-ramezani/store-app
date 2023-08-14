import React from 'react'
import Input from '../Input/Input'

const InputEmail = (props) => { 
   return(
      <>
      <div>
         <Input type='email' {...props} />
      </div>
      <style jsx>{`
         div{
            width: 100%;
         }
      `}</style>
      </>
   )
}

export default InputEmail