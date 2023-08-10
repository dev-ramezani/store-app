import Head from 'next/head'
import Menu from '../containers/menu'
import React, { useState } from 'react'
import { Inter } from 'next/font/google'
import { validateEmail, validateInput, validateMessage  } from '../configs/validate'

const inter = Inter({ subsets: ['latin'] })

export default function contact() {
   const [Name,setName] = useState('');
   const [Email,setEmail] = useState('');
   const [Subject,setSubject] = useState('');
   const [Message,setMessage] = useState('');
   const [Status,setStatus] = useState(null);
   const [Errors,setError] = useState({});

   const verifyName = (event) => { 
      setStatus(null);
      if ( validateInput(event.target.value) ){
         setName(event.target.value)
         setError({
            ...Errors,
            Name: null
         })}
      else{
         setError({
            ...Errors,
            Name: "Name can not be empty"
         })
         setName('')
      } 
   };

   const verifyEmail = (event) =>{
      setStatus(null);
      if ( validateEmail(event.target.value) ){
         setEmail(event.target.value)
         setError( {
            ...Errors,
            Email: null
         })}
      else{
         setError({
            ...Errors,
            Email: "Email is not vaild"
         })
         setEmail('')
      }
   };

   const verifySubject = (event) => { 
      setStatus(null);
      if ( validateInput(event.target.value) ){
         setSubject(event.target.value)
         setError({
            ...Errors,
            Subject: null
      })}
      else{
         setError({
            ...Errors,
            Subject: "Subject can not be empty"
         })
         setSubject('')
      } 
   };
  
   const verifyMessage = (event) => { 
      setStatus(null);
      if ( validateMessage(event.target.value) ){
         setMessage(event.target.value)
         setError( {
            ...Errors,
            Message: null
         })}
      else{
         setError({
            ...Errors,
            Message: "Your message must be more than 10 characters"
         })
         setMessage('')
      }  
   };

   const Send = () => {
      if( Name!=="" && Subject !== "" && Email !== "" && Message !== ""){
         console.log('Name: ',Name)
         console.log('Email Address: ',Email)
         console.log('Subject: ',Subject)
         console.log('Message: ',Message)
         document.getElementsByTagName('Input')[0].value = ""
         document.getElementsByTagName('Input')[1].value = ""
         document.getElementsByTagName('Input')[2].value = ""
         document.getElementsByTagName('textarea')[0].value = ""
         setName('')
         setEmail('')
         setSubject('')
         setMessage('')
         setStatus("Your message has been successfully sent.")
      }
      else{ setStatus("An error occurred while sending the message.") };
   }

   return (
      <>
         <Head>
            <title>Online stationery store</title>
         </Head>
         <main className={inter.className}>
            <Menu ID={4} />
            <h1>Contact us</h1>
            <h4>We are waiting for your comments, suggestions and criticisms....</h4>
            <form>
               <input placeholder='Your name' onChange={verifyName} />
               {Errors.Name &&<p>{Errors.Name}</p>}
               <input placeholder='Your email address' onChange={verifyEmail} />
               {Errors.Email &&<p>{Errors.Email}</p>}
               <input placeholder='Your subject' onChange={verifySubject} />
               {Errors.Subject &&<p>{Errors.Subject}</p>}
               <textarea placeholder='Your message' onChange={verifyMessage} />
               {Errors.Message &&<p>{Errors.Message}</p>}
            </form>
            {Status && <p>{Status}</p>}
            <button onClick={Send}>Send</button>
         </main>
         <style jsx>{`
            h1,h4,p{
               font-weight: 400;
               text-align: center;
            }

            h1,h4{ margin-top: 50px; }
            h1{ color: #d63031; }
            h4{ color: #e74c3c; }
            p{ color: #c23616; }

            form{ margin: 50px; }

            input,textarea{
               margin: 15px;
               display: block;
               font-size: 16px;
               padding: 5px 10px; 
            }

            input{ height: 30px; }
            textarea{ height: 210px; }

            button{
               padding: 20px;
               color: #F79F1F;
               display: block;
               cursor: pointer;
               font-size: 16px;
               margin: 60px auto;
               border-radius: 80px;
               background-color: white;
               border: 2px solid #F79F1F;
            }

            button:hover{
               color: #e84118;
               border: 2px solid #c23616;
            }

            @media (min-width: 320px) {  
               input,textarea{ width:75%; }
            }
       
            @media (min-width: 425px) {  
               input,textarea{ width:82%; }
            }
       
            @media (min-width: 768px) { 
               input,textarea{ width:92%; }
            }
       
            @media (min-width: 992px) { 
               input,textarea{ width: 95%; }
            }
             
            @media (min-width: 1600px) { 
               input,textarea{ width: 97% }
            }
         `}</style>
    </>
  )
}
