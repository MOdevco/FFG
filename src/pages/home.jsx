import React from 'react'
import Navbar from '../components/home/navbar'
import Main from '../components/home/main'
import Loyihalar from '../components/home/loyihalar'
import Hizmatlar from '../components/home/hizmatlar'
import Shartnoma from '../components/home/shartnoma'
import Holat from '../components/home/Holat'
import Card from '../components/home/card'
import Texnologiyalar from '../components/home/texnologiyalar'
import Footer from '../components/home/footer'

function Home() {
  return (
    <div>
        <Navbar bg={'#D2E6E4'} />
        <Main />
        <Loyihalar />
        <Hizmatlar />
        <Shartnoma />
        <Holat />
        <Card />
        <Texnologiyalar />
        <Footer />
    </div>
  )
}

export default Home