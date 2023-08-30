import React from 'react'

const LayoutAuth = ({ children }) => { 
   return(
      <>
         <main>
            <img src='Icons/auth_logo.jpg'/>
            <div>{children}</div>
         </main>
         <style jsx>{`
            main{
               height:97vh;
               display:flex;
               align-items:center;
               flex-direction:column;
               justify-content:center;
            }

            div{
               font-size:17px;
               min-width:300px;
               text-align:center;
            }

            img{
               width:100px;
            }
         `}</style>
      </>
   )
}

export default LayoutAuth
