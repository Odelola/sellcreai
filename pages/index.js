import Head from 'next/head'
import Image from 'next/image'
import { AdsSection, Hero, Navbar, SampleOM } from "../sections"

export default function Home() {
  return (
    <div>
      <Head>
        <title>SellCRE.ai | SellCRE Coding Test</title>
        <meta name="description" content="Commercial Real Estate Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}

      <main>
        <div className="container">

          <Navbar />
          <Hero />
          <AdsSection />
        </div>
        <SampleOM />
      </main>
    </div>
  )
}
