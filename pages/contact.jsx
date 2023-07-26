import Menu from '../components/menu'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function contact() {
  return (
    <main className={inter.className}>
      <Menu ID={4} />
      <p>This is contact page</p>
    </main>
  )
}
