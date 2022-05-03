import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-purple-900">
      <Head>
        <title>Robovice</title>
        <meta name="description" content="We help young Robotic Enthusiasts master their skills in robotics." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="w-max mx-auto py-16">
        <div className="font-abril text-lg md:text-4xl mx-auto text-white">Routing through multiple domains in PWA</div>
      </div>
      <a href="https://courses.robovice.org"><div className="hover:underline max-w-fit cursor-pointer text-white my-4 py-16">Courses Webapp</div></a>
      <Link href="/testRoute"><div className="hover:underline max-w-fit cursor-pointer text-white my-4 pb-16">Test Route</div></Link>
    </div>
  )
}
