import React from 'react'

const Small = ({ children, color }) => { 
   return(
      <>
         <small>{children}</small>
         <style jsx>{`
            small{
               color:${color};
               font-size:0.9rem;
               font-weight:900;
            }
         `}</style>
      </>
   )
}

export default Small