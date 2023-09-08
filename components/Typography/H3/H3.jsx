import React from 'react'

const H3 = ({ children, align }) => { 
   return(
      <>
         <h3>{children}</h3>
         <style jsx>{`
            h3{
               margin:1em 0;
               color:#e67e22;
               font-weight:600;
               line-height:1.3;
               font-size:1.728em;
               text-align:${align};
            }
         `}</style>
      </>
   )
}

export default H3