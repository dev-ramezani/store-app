import React from 'react'

const H1 = ({ children }) => { 
   return(
      <>
         <h1>{children}</h1>
         <style jsx>{`
            h1{
               font-weight: 300;
               line-height: 1.3;
               font-size: 2.488rem;
               margin: 1.2rem 0 1.4rem;
            }
         `}</style>
      </>
   )
}

export default H1