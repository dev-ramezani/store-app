import React from 'react'

const Button = ({ children, buttonModel = 'primary', onClick = () => {}, loading, widthAll }) => {
   return (
      <>
         <div>
            <button onClick={onClick} disabled={loading}>
               { loading && 'چند لحظه صبر کنید...'}
               { !loading && children}
            </button> 
         </div>
         <style jsx>{`
            div{
               width:100%;
               text-align:${ !widthAll && 'center'};
            }

            button{
               border:2px;
               color:white;
               padding:15px;
               font-size:1.1;
               cursor:pointer;
               font-size:18px;
               position:relative;
               border-radius:16px;
               display:inline-block;
               text-decoration:none;
               background-color:#f39c12;
               transition-duration:0.4s;
               width:${ widthAll ? '100%' : 'auto' };
            }

            button:hover{
               box-shadow:${ buttonModel == 'primary' && '0px 0px 8px gray' };
            }

            button:disabled{
               background-color:rgb(243, 156, 18, 0.5);
            }
         `}</style>
      </>
   )
}

export default Button