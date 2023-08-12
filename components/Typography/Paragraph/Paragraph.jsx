import React from 'react'

const Paragraph = ({ children, align = 'right', gap = '0px', type = 'primary' }) => { 
   return(
      <>
         <p>{children}</p>
         <style jsx>{`
            p{
               font-size: 1.3rem;
               text-align: ${align};
               margin-bottom: ${gap};
               color:${ type == 'primary' ? '#e74c3c' : 'white' };
            }
         `}</style>
      </>
   )
}

export default Paragraph