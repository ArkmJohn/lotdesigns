import Head from 'next/head';
import Header from './Components/header'
import Hero from './Components/hero';

const mainStyle = {
  height: '100vh',
  overflow: 'hidden',
}

export default function Home() {
  return (
    <main style={mainStyle}>
      <Header/>
      <Hero />
    </main>
  )
}
