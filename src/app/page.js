import Head from 'next/head';
import Header from './Components/header'
import Hero from './Components/hero';
export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
    </main>
  )
}
