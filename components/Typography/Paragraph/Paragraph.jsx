import React from 'react'

const Paragraph = ({ children, align = 'right', topGap = '0px' ,  bottomGap = '0px', leftGap = '0px', type = 'primary' }) => { 
   return(
      <>
         <p>{children}</p>
         <style jsx>{`
            p{
               font-size:1.3rem;
               text-align:${align};
               margin-top:${topGap};
               margin-left:${leftGap};
               margin-bottom:${bottomGap};
               color:${ type == 'primary' ? '#f39c12' : 'white' };
               font-weight:${ type == 'secondary' ? '500' : '600' };
            }
         `}</style>
      </>
   )
}

export default Paragraph