import Reset from '../containers/Reset'
import Document ,{ Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const initalProps = await Document.getInitialProps(ctx)
      return { ...initalProps }
   }

   render(){
      return (
         <Html>
            <Head />
            <body>
               <Reset />
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument
