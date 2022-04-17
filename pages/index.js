import Head from 'next/head'
import styles from '../styles/Home.module.css'

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
      <div className="w-max mx-auto py-36 h-screen">
        <div className="font-abril text-4xl mx-auto w-max text-white">R</div>
        <div className="font-abril text-4xl mx-auto w-max text-white">O</div>
        <div className="font-abril text-4xl mx-auto w-max text-white">B</div>
        <div className="font-abril text-4xl mx-auto w-max text-white">O</div>
        <div className="font-abril text-4xl mx-auto w-max text-white">V</div>
        <div className="font-abril text-4xl mx-auto w-max text-white">I</div>
        <div className="font-abril text-4xl mx-auto w-max text-white">C</div>
        <div className="font-abril text-4xl mx-auto w-max text-white">E</div>
      </div>

    </div>
  )
}
