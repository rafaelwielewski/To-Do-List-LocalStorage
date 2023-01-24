import Head from 'next/head'
import Image from 'next/image'
import { Content, Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Home from './home'

const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <>
      <Head>
        <title>To-Do-List</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.2.1/css/all.css"></link>
      </Head>
      <main className="">
        <Home />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js"></script>
      </main>
    </>
  )
}
