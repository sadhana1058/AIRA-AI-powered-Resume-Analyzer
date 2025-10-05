import React from 'react'
import Navbar from '~/components/Navbar'
import { usePuterStore } from '~/lib/puter'

const upload = () => {
    const {auth} = usePuterStore()
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">

    </section>
    </main>
  )
}

export default upload
