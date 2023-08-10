import React from 'react'
import Link from 'next/link'

const Hyperlink = ({ href, children }) => { 
   return(
      <>
         <div>
            <Link legacyBehavior href={href} >
               <a>
                  {children}
               </a>
            </Link>
         </div>
         <style jsx>{`
            a{
               cursor: pointer;
               margin-right: 15px;
               display: inline-block;
               text-decoration: none;
            }
         `}</style>
      </>
   )
}

export default Hyperlink