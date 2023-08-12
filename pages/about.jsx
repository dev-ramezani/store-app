import Head from 'next/head'
import LayoutPage from '../containers/LayoutPage'
import { H1, Paragraph, Hyperlink } from '../components/index'

export default function about() {
  return (
    <>
      <Head>
         <title>فروشگاه اینترنتی لوازم التحریر</title>
      </Head>
      <LayoutPage>
         <H1 align='center'>درباره ی ما</H1>
         <Paragraph>
            لوازم التحریر مهر در سال 1370 با هدف فروش بهترین لوازم التحریر جهان به شما عزیزان افتتاح شد.
            با شیوع ویروس کرونا و تعطیلی بسیاری از مشاغل تصمیم گرفتیم تا کسب و کار خود را با ساخت یک فروشگاه
            اینترنتی ادامه دهیم تا شما عزیزان بتوانید راحتر از قبل سفارشات خود را ثبت کنید و نیازی به مراجعه
            حضوری نداشته باشید؛ بدیهی است که خدمت رسانی به شما عزیزان مانند گذشته به صورت حضوری نیز انجام خواهد 
            شد.
         </Paragraph>
         <div className='text'>
            <Paragraph>
               اگر محصول مورد نظر شما در سایت وجود ندارد، از طریق بخش 
            </Paragraph>
            <Hyperlink href='/contact'>تماس با ما</Hyperlink>
            <Paragraph>
               سفارش خود را ثبت کنید.
            </Paragraph>
            <Paragraph>
               بزودی محصولات بیشتری در سایت اضافه خواهد شد.
            </Paragraph> 
         </div>
         <div className='img'>
            <img src='About/Stationery_store.jpg' alt='stationery-store' />
            <img src='About/Stationery_company.jpg' alt='stationery-compony' />
         </div>
      </LayoutPage>
      <style jsx>{`
         div.text{
            display: flex;
            font-size: 18px;
            align-items: center;
            flex-direction: column;
            margin: 80px 0px 50px;
         }

         div.img{
            display: flex;
            flex-direction: row;
            justify-content: center;
         }

         img{
            width: 615px;
            border-radius: 40px;
            margin: 30px 30px 60px;
            box-shadow: 1px 1px 16px gray;
         }

         @media (min-width: 320px) and (max-width: 1200px){
            div.img{
               flex-direction: column;
            }

            img{
               margin: 30px auto 60px;
            }
         }


         @media (min-width: 320px) and (max-width: 426px){
            img{
               width: 320px;
               margin: 30px auto 60px;
            }
         }
      `}</style>
    </>
  )
}
