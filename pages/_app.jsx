import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import Cookies from 'universal-cookie'
import createMyStore from '../configs/store'
import windowHandler from '../utils/windowHandler'
import { LOGOUT_ACTION, VERIFY_USER_ACTION } from '../actions'

const store = createMyStore()

const MyApp = ( { Component, pageProps } ) => {
   return (
      <Provider store={store}>
         <Component {...pageProps} />
      </Provider>
   )
}

MyApp.getInitialProps = async (appContext) => {
   appContext.ctx.reduxStore = store
   let cookies = { }
   if (appContext.ctx.req){
      cookies = new Cookies(appContext.ctx.req.headers.cookie)
   }
   else{
      cookies = new Cookies()
   }
   windowHandler.cookies = cookies
   if( cookies.get('user-id') && cookies.get('user-id') != '' ){
      await store.dispatch(VERIFY_USER_ACTION(cookies.get('user-id')))
      const { auth } = await store.getState()
      if( appContext.ctx.res ){
         const loggedCookie = `logged=${auth.logged}` 
         appContext.ctx.res.setHeader('set-cookie',`${loggedCookie}`)
      }
   }
   else{
      if( appContext.ctx.res ){
         const userIdCookie = 'user-id='
         appContext.ctx.res.setHeader('set-cookie',`${userIdCookie}`)
         const loggedCookie = 'logged=false'
         appContext.ctx.res.setHeader('set-cookie',`${loggedCookie}`)
         await store.dispatch(LOGOUT_ACTION())
      }
   }
   const pageProps = await App.getInitialProps(appContext)
   return { ...pageProps }
}

export default MyApp