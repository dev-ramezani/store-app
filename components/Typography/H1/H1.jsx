import React from 'react'

const H1 = ({ children, align }) => { 
   return(
      <>
         <h1>{children}</h1>
         <style jsx>{`
            h1{
               color:#e67e22;
               font-weight:500;
               line-height:1.3;
               margin:1.8rem 0;
               font-size:2.488rem;
               text-align:${align};
            }
         `}</style>
      </>
   )
}

export default H1