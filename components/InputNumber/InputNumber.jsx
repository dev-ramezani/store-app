import React from 'react'
import Input from '../Input/Input'

const InputNumber = (props) => { 
   return(
      <>
         <div>
            <Input type='tel' {...props} />
         </div>
         <style jsx>{`
            div{
               width: 100%;
            }
         `}</style>
      </>
   )
}

export default InputNumber