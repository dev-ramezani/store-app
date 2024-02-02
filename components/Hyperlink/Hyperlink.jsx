import React from 'react'
import Link from 'next/link'

const Hyperlink = ({ href, children, display = 'inline-block', type = 'primary' }) => { 
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
               display:${display};
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