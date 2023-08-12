import React from 'react'
import Input from '../Input/Input'

const InputText = (props) => { 
   return(
      <>
      <div>
         <Input type='text' {...props} />
      </div>
      <style jsx>{`
         div{
            width: 100%;
         }
      `}</style>
      </>
   )
}

export default InputText