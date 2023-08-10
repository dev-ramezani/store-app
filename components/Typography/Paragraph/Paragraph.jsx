import React from 'react'

const Paragraph = ({ children }) => { 
   return(
      <>
         <p>{children}</p>
         <style jsx>{`
            p{
               margin-bottom: 1rem;
            }
         `}</style>
      </>
   )
}

export default Paragraph