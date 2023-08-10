import React from 'react'

const H2 = ({ children }) => { 
   return(
      <>      
         <h2>{children}</h2>
         <style jsx>{`
            h2{
               font-weight: 300;
               line-height: 1.3;
               font-size: 2.074rem;
               margin: 1.2rem 0 1.4rem;
            }
         `}</style>
      </>

   )
}

export default H2