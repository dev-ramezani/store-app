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
               display:inline-block;
            }

            a{
               cursor:pointer;
               text-decoration:none;
               font-weight:${ type == 'primary' ? '600' : '500'};
               color:${ type == 'primary' ? '#f1c40f' : 'white'};
            }
         `}</style>
      </>
   )
}

export default Hyperlink