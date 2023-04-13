import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from '@/components/header/header'
import Hero from '@/components/hero/hero';
import HeroNew from '@/components/hero/hero-new';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-black h-[100vh] flex overflow-hidden bg-[url('/assets/frame.svg')]">
      <Header />
      <Hero />
      <HeroNew />
    </main>
  )
}
