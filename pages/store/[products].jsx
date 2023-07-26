import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function product() {
  return (
    <main className={inter.className}>
      <p>This is product details page</p>
    </main>
  )
}
