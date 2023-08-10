import React from 'react'

const Small = ({ children }) => { 
   return(
      <>
         <small>{children}</small>
         <style jsx>{`
            small{
               font-size: 0.833rem;
            }
         `}</style>
      </>
   )
}

export default Small