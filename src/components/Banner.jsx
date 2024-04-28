import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import bannerImg1 from '../assets/slider1.webp';
import bannerImg2 from '../assets/slider2.webp';
import bannerImg3 from '../assets/slider3.webp';
import { Typewriter } from 'react-simple-typewriter'

export default function Banner() {
  return (

    <Swiper autoHeight={true} navigation={true} loop={true} modules={[Navigation]}>
    <SwiperSlide className='relative'>
      <div className='overlay'></div>
      <img src={bannerImg1} className="w-full h-full lg:h-[600px] object-cover object-center" />
    <div className='absolute w-10/12 lg:w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
      <h1 className='text-white text-3xl lg:text-5xl font-semibold mb-4'>
      <Typewriter
      words={['Painting', '&', 'Drawing', 'Delights']}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
      >

      </Typewriter>
        </h1>

      <p className='text-white text-lg hidden md:block'>Explore a world of artistic wonder with our Painting & Drawing Delights collection. From vibrant colors to intricate details, discover inspiration and unleash your creativity with every stroke of the brush and pencil.</p>
    </div>
    </SwiperSlide>
    <SwiperSlide className='relative'>
    <div className='overlay'></div>
    <img src={bannerImg2} className="w-full h-full lg:h-[600px] object-cover object-center" />
    <div className='absolute w-10/12 lg:w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
      <h1 className='text-white text-3xl lg:text-5xl font-semibold mb-4'>
      <Typewriter
      words={['Artistry', 'in', 'Every', 'Stroke']}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
      >

      </Typewriter>
        </h1>
      <p className='text-white text-lg hidden md:block'>Experience the artistry in every stroke with our captivating collection. From bold brushstrokes to delicate lines, immerse yourself in a world of creativity and expression.</p>
    </div>
    </SwiperSlide>
    <SwiperSlide className='relative'>
    <div className='overlay'></div>
    <img src={bannerImg3} className="w-full h-full lg:h-[600px] object-cover object-center" />
    <div className='absolute w-10/12 lg:w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
      <h1 className='text-white text-3xl lg:text-5xl font-semibold mb-4'>
      <Typewriter
      words={['Expressive', 'Creations', 'Await']}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
      >

      </Typewriter>
        </h1>
      <p className='text-white text-lg hidden md:block'>Unlock a realm of expressive creations with our curated selection. Each piece is a journey of imagination, waiting to be explored and cherished.</p>
    </div>
    </SwiperSlide>
  </Swiper>
  )
}
