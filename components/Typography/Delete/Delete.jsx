import React from 'react'

const Delete = ({ children, align = 'right', gap = '0px' }) => { 
   return(
      <>
         <del>{children}</del>
         <style jsx>{`
            del{
               display:block;
               color:#f39c12;
               font-weight:600;
               font-size:1.3rem;
               text-align:${align};
               margin-bottom:${gap};  
            }
         `}</style>
      </>
   )
}

export default Delete