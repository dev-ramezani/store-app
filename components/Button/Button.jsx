import React from 'react'

const Button = ({ children, buttonModel = 'primary', onClick = () => {}, loading, disabled, noBackground, justBorder, widthAll }) => {
   return (
      <>
         <div>
            <button onClick={onClick} disabled={loading || disabled}>
               { loading && 'چند لحظه صبر کنید...'}
               { !loading && children}
            </button> 
         </div>
         <style jsx>{`
            div{
               width:${ !noBackground && '100%'};
               text-align:${ !widthAll && 'center'};
            }

            button{
               border:0px;
               color:white;
               font-size:1.1;
               cursor:pointer;
               font-size:18px;
               position:relative;
               border-radius:16px;
               display:inline-block;
               text-decoration:none;
               transition-duration:0.4s;
               padding:${ !noBackground ? '15px' : '5px 15px 0px'};
               border:${ justBorder && '2px solid' };
               width:${ widthAll ? '100%' : 'auto' };
               color:${ !justBorder ? 'white' : '#f39c12' };
               background-color:${ !noBackground && !justBorder ? '#f39c12' : 'white' };
            }

            button:hover{
               box-shadow:${ buttonModel == 'primary' && '0px 0px 8px gray' };
            }

            button:disabled{
               border:${ justBorder ? '2px solid' : 'none' };
               background-color:${ !noBackground && !justBorder ? 'rgb(243, 156, 18, 0.5)' : 'white' };
            }
         `}</style>
      </>
   )
}

export default Button