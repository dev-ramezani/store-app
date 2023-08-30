import Head from 'next/head'
import React, { useState } from 'react'
import LayoutPage from '../containers/LayoutPage'
import FormControl from '../containers/FormControl'
import { validateEmail, validateInput  } from '../configs/validate'
import { H1, Paragraph, InputText, InputEmail, TextArea, Small, Button } from '../components';

export default function contact() {
   const [Name,setName] = useState('');
   const [Email,setEmail] = useState('');
   const [Errors,setError] = useState({});
   const [Subject,setSubject] = useState('');
   const [Message,setMessage] = useState('');
   const [Status,setStatus] = useState(null);

   const verifyName = (event) => { 
      setStatus(null);
      if ( validateInput(event) ){
         setName(event)
         setError({
            ...Errors,
            Name: null
         })}
      else{
         setError({
            ...Errors,
            Name: "غیر مجاز! نام شما باید بیشتر از 10 کاراکتر باشد."
         })
         setName('')
      } 
   };

   const verifyEmail = (event) =>{
      setStatus(null);
      if ( validateEmail(event) ){
         setEmail(event)
         setError( {
            ...Errors,
            Email: null
         })}
      else{
         setError({
            ...Errors,
            Email: "غیر مجاز! ایمیل معتبر نیست."
         })
         setEmail('')
      }
   };

   const verifySubject = (event) => { 
      setStatus(null);
      if ( validateInput(event) ){
         setSubject(event)
         setError({
            ...Errors,
            Subject: null
      })}
      else{
         setError({
            ...Errors,
            Subject: "غیر مجاز! عنوان پیام باید بیش از 10 کاراکتر باشد."
         })
         setSubject('')
      } 
   };
  
   const verifyMessage = (event) => { 
      setStatus(null);
      if ( validateInput(event.target.value) ){
         setMessage(event.target.value)
         setError( {
            ...Errors,
            Message: null
         })}
      else{
         setError({
            ...Errors,
            Message: "غیر مجاز! متن پیام باید بیش از 10 کاراکتر باشد."
         })
         setMessage('')
      }  
   };

   const handleSubmit = (event) => {
      if (event) event.preventDefault()
      if( Name!=="" && Subject !== "" && Email !== "" && Message !== ""){
         console.log('نام: ',Name)
         console.log('ایمیل: ',Email)
         console.log('موضوع پیام: ',Subject)
         console.log('متن پیام: ',Message)
         document.getElementsByTagName('Input')[0].value = ""
         document.getElementsByTagName('Input')[1].value = ""
         document.getElementsByTagName('Input')[2].value = ""
         document.getElementsByTagName('textarea')[0].value = ""
         setName('')
         setEmail('')
         setSubject('')
         setMessage('')
         setStatus("پیام شما با موفقیت ارسال شد.")
      }
      else{ setStatus("لطفا فیلد های فوق را با دقت تکمیل کرده و مجدد تلاش کنید."); }
   }
   return (
      <>
         <Head>
            <title>فروشگاه آنلاین لوازم التحریر</title>
         </Head>
         <LayoutPage>
            <H1 align='center'>ارتباط با ما</H1>
            <Paragraph align='center'>منتظر نظرات، پیشنهادات، انتقادات و سوالات شما هستیم....</Paragraph>
            <form onSubmit={handleSubmit}>
               <FormControl>
                  <InputText placeholder='نام شما' onChange={verifyName} />
                  {Errors.Name && <Small color='red'>{Errors.Name}</Small>}
               </FormControl>
               <FormControl>
                  <InputEmail placeholder='ایمیل شما' onChange={verifyEmail} />
                  {Errors.Email && <Small color='red'>{Errors.Email}</Small>}
               </FormControl>
               <FormControl>
                  <InputText placeholder='موضوع پیام' onChange={verifySubject} />
                  {Errors.Subject && <Small color='red'>{Errors.Subject}</Small>}
               </FormControl>
               <FormControl>
                  <TextArea placeholder='متن پیام' onChange={verifyMessage} />
                  {Errors.Message && <Small color='red'>{Errors.Message}</Small>}
               </FormControl>
               <FormControl>
                  {Status && <Paragraph align='center'>{Status}</Paragraph>}
                  <Button>ارسال</Button>
               </FormControl>
            </form>
         </LayoutPage>
      </>
   )
}
