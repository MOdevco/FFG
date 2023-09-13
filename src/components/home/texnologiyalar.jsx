import { Box, Heading, Image } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { animals, line, react } from '../../assets'
import SwiperProps from './swiperProps'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import {Autoplay, Pagination } from 'swiper/modules';

function Texnologiyalar() {

  return (
    <Box pt={{md:'40px', '2xl': '120px', base :'50px'}} className='bg' w={'100%'} h={{'2xl': '100%',}} pb={'40px'}>
      <Box w={{md: '80%', base: '90%'}} m={'auto'}>
        <Heading textAlign={'center'}  fontSize={{md: '45px', base: '30px'}} color={'#0B7077'} fontWeight={{base :'400', md: '700'}}>Biz Ishlaydigan Texnologiyalar</Heading>
            <Box className='line3' color={'#FD661F'}  w={{base: '80%', lg: '70%', md: '93%'}} display={{base: 'none',md :'none', '2xl':'flex'}} alignItems={{md:'center', base: 'flex-end'}} justifyContent={{md:'flex-end', base: 'flex-end'}}>
                <Image src={line} />
            </Box>

      </Box>
            <Box className='swiper1' pt={'50px'} display={{base: 'none', '2xl':'flex'}} alignItems={'center'} justifyContent={'center'}>
              <Swiper slidesPerView={1}
        spaceBetween={-900}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper">
                <SwiperSlide>
              <SwiperProps img1={react} info={'Texnaligiya yordamida bizning hizmatlardan foidalanishingiz mumkun bo’ladi uning uchun biz bilan a’loqaga chiqing.'} text={'React js texnalogiyasi yordamida loihalaringizni quring.'} number={'+ 10 dasturchilar'} img={animals} />
                </SwiperSlide>
                <SwiperSlide>
              <SwiperProps img1={react} info={'Texnaligiya yordamida bizning hizmatlardan foidalanishingiz mumkun bo’ladi uning uchun biz bilan a’loqaga chiqing.'} text={'React js texnalogiyasi yordamida loihalaringizni quring.'} number={'+ 10 dasturchilar'} img={animals} />
                </SwiperSlide>
                <SwiperSlide>
              <SwiperProps img1={react} info={'Texnaligiya yordamida bizning hizmatlardan foidalanishingiz mumkun bo’ladi uning uchun biz bilan a’loqaga chiqing.'} text={'React js texnalogiyasi yordamida loihalaringizni quring.'} number={'+ 10 dasturchilar'} img={animals} />
                </SwiperSlide>
                <SwiperSlide>
              <SwiperProps img1={react} info={'Texnaligiya yordamida bizning hizmatlardan foidalanishingiz mumkun bo’ladi uning uchun biz bilan a’loqaga chiqing.'} text={'React js texnalogiyasi yordamida loihalaringizni quring.'} number={'+ 10 dasturchilar'} img={animals} />
                </SwiperSlide>

              </Swiper>
  
              
              </Box>

              <Box className='swiper2' pt={'50px'} display={{base: 'flex', '2xl':'none'}} alignItems={'center'} justifyContent={'center'}>
              <Swiper slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper">
                <SwiperSlide>
              <SwiperProps img1={react} info={'Texnaligiya yordamida bizning hizmatlardan foidalanishingiz mumkun bo’ladi uning uchun biz bilan a’loqaga chiqing.'} text={'React js texnalogiyasi yordamida loihalaringizni quring.'} number={'+ 10 dasturchilar'} img={animals} />
                </SwiperSlide>
                <SwiperSlide>
              <SwiperProps img1={react} info={'Texnaligiya yordamida bizning hizmatlardan foidalanishingiz mumkun bo’ladi uning uchun biz bilan a’loqaga chiqing.'} text={'React js texnalogiyasi yordamida loihalaringizni quring.'} number={'+ 10 dasturchilar'} img={animals} />
                </SwiperSlide>
                <SwiperSlide>
              <SwiperProps img1={react} info={'Texnaligiya yordamida bizning hizmatlardan foidalanishingiz mumkun bo’ladi uning uchun biz bilan a’loqaga chiqing.'} text={'React js texnalogiyasi yordamida loihalaringizni quring.'} number={'+ 10 dasturchilar'} img={animals} />
                </SwiperSlide>
                <SwiperSlide>
              <SwiperProps img1={react} info={'Texnaligiya yordamida bizning hizmatlardan foidalanishingiz mumkun bo’ladi uning uchun biz bilan a’loqaga chiqing.'} text={'React js texnalogiyasi yordamida loihalaringizni quring.'} number={'+ 10 dasturchilar'} img={animals} />
                </SwiperSlide>

              </Swiper>
  
              
              </Box>
    </Box>
  )
}

export default Texnologiyalar