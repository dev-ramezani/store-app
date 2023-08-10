import React from 'react'

const H3 = ({ children }) => { 
   return(
      <>
         <h3>{children}</h3>
         <style jsx>{`
            h3{
               font-weight: 300;
               line-height: 1.3;
               font-size: 1.728rem;
               margin: 1.2rem 0 1.4rem; 
            }
         `}</style>
      </>
   )
}

export default H3