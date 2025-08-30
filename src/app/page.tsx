
import Prompt from '@/components/Prompt'
import Hero from '../components/Hero'
import React from 'react'
import EndInfoThirdSection from '@/components/EndInfoThirdSection'
import Bottom from '@/components/Bottom'

const Home = () => {
  return (
    <main className='dark:bg-stone-900'>
      <Hero/>
      <Prompt/>
      <EndInfoThirdSection/>
      <Bottom/>
    </main>
  )
}

export default Home