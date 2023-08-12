import React from 'react'

const H3 = ({ children, align }) => { 
   return(
      <>
         <h3>{children}</h3>
         <style jsx>{`
            h3{
               color: #c0392b;
               font-weight: 300;
               line-height: 1.3;
               margin: 1.8rem 0;
               font-size: 1.728rem;
               text-align: ${align};
            }
         `}</style>
      </>
   )
}

export default H3