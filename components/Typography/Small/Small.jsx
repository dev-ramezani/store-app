import React from 'react'

const Small = ({ children, color }) => { 
   return(
      <>
         <small>{children}</small>
         <style jsx>{`
            small{
               color:${color};
               font-weight:900;
               font-size:0.9rem;
            }
         `}</style>
      </>
   )
}

export default Small