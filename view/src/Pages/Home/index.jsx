import Email from '../../Components/Email'
import Gallery from '../../Components/Gallery'
import Guests from '../../Components/Guests'
import Hero from '../../Components/Hero'
import Podcasts from '../../Components/Podcasts'

function Home() {
  return (
    <>
      <Hero />
      <Podcasts/>
      <Gallery/>
      <Guests/>
      <Email/>
    </>
  )
}

export default Home