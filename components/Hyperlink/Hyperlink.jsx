import React from 'react'
import Link from 'next/link'

const Hyperlink = ({ href, children, type = 'primary' }) => { 
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
            div{
               display: inline-block;
            }

            a{
               cursor: pointer;
               text-decoration: none;
               color: ${ type == 'primary' ? '#3498db' : 'white'}
            }
         `}</style>
      </>
   )
}

export default Hyperlink