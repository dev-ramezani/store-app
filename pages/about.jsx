import Menu from '../components/menu'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function about() {
  return (
    <main className={inter.className}>
      <Menu ID={3} />
      <p>This is about page</p>
    </main>
  )
}
