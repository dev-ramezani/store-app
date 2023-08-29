import React from 'react'

const H2 = ({ children, align }) => { 
   return(
      <>      
         <h2>{children}</h2>
         <style jsx>{`
            h2{
               color:#e67e22;
               font-weight:500;
               line-height:1.3;
               margin:1.8rem 0;
               font-size:2.074rem;
               text-align:${align};
            }
         `}</style>
      </>

   )
}

export default H2