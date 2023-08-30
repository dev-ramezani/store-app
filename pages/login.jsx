import Head from 'next/head'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'
import LayoutAuth from '../containers/LayoutAuth'
import React, { useState, useEffect } from 'react'
import FormControl from '../containers/FormControl'
import { useDispatch, useSelector } from 'react-redux'
import { GET_USER_INFO_ACTION } from '../actions/index'
import { H3, InputText, InputPassword, Alert, Button, Hyperlink } from '../components'

export default function Login() {
   let found = false
   const router = useRouter()
   const cookies = new Cookies()
   const dispatch = useDispatch()
   const [message,setMessage] = useState(null)
   const [formValue,setFormValue] = useState({})
   const { users, loading } = useSelector((state) => state.auth )

   const handleSubmit = (event) => {
      if (event) event.preventDefault()
      if ( formValue.username && formValue.password ){ dispatch(GET_USER_INFO_ACTION()) }
      else{ setMessage('لطفا فیلد های زیر را تکمیل کرده و مجدد اقدام کنید') }
   }

   const handleOnChange = (name,value) => {
      setFormValue({
         ...formValue,
         [name]: value,
      })
   }

   useEffect(()=>{
      if ( users ){
         users.map((user) => {
            if ( user.email == formValue.username && user.password == formValue.password || user.phone == formValue.username && user.password == formValue.password ){ 
               router.push('/') 
               setMessage(null)
               cookies.set('user-id',user.id,{ path: '/' })
               found = true
            }
         })
         if( !found ){ setMessage('نام کاربری یا رمز عبور اشتباه است') }  
      }
   },[users])

   useEffect(() => { setMessage(null) },[])

   return (
      <>
         <Head>
            <title>ورود</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <LayoutAuth>
            <H3>وارد شوید</H3>
            { message && <Alert>{message}</Alert> }
            <form onSubmit={handleSubmit}>
               <FormControl>
                  <InputText onChange={(value) => handleOnChange('username',value)} placeholder='ایمیل یا شماره همراه'/>
               </FormControl>
               <FormControl>
                  <InputPassword onChange={(value) => handleOnChange('password',value)} placeholder='رمز عبور' />
               </FormControl>
               <FormControl>
                  <Button type='submit' buttonModel='secondary' loading={loading} widthAll>وارد شوید</Button>
               </FormControl>
               <div>
                  <Hyperlink href='/register'>ثبت نام کنید</Hyperlink> 
               </div>
            </form>
         </LayoutAuth>
         <style jsx>{`
            div{ padding:10px; }
         `}</style>
      </>
   )
}
