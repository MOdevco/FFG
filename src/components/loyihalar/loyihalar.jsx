import { Box, Heading, Image } from '@chakra-ui/react'
import LoyihalarCard from './loyihalarCardProps'
import { line, loyihalar, react } from '../../assets'

function LoyihalarComponents() {
  return (
    <Box pt={{md:'60px', '2xl': '200px', base :'50px'}} className='bg' w={'100%'} h={{'2xl': '100%',}} pb={'40px'}>
      <Box w={{md: '90%', base: '90%', '2xl': '80%'}} m={'auto'}>
      <Heading textAlign={'center'}  fontSize={{md: '45px', base: '30px'}} color={'#FD661F'} fontWeight={{base :'400', md: '700'}}>Bizning Hizmatlar</Heading>
            <Box className='line2'  w={{base: '80%', lg: '62%', md: '77%'}} display={{base: 'none',md :'none', '2xl':'flex'}}  alignItems={{md:'center', base: 'flex-end'}} justifyContent={{md:'flex-end', base: 'flex-end'}}>
                <Image src={line} />
            </Box>
        <Box pt={{lg:'80px', base: '50px', }} display={'flex'} alignItems={'center'} flexWrap={'wrap'} justifyContent={'center'} rowGap={{'2xl':'4rem', xl: '2rem', lg: '1rem', md :'2rem', base: '2rem'}} className='gap' columnGap={{'2xl': '9rem', xl: '1rem'}}>
            <LoyihalarCard img={loyihalar} img1={react} info={'Turizm uchun web site. Bunda ishlatilgan texnalogiyalar react js , typescript , chakra ui va boshqa texnalogiyalar tanshish uchun quydagi tugmani bosing.'} text={'Qaysidur markaz uchun loiha qilingan bo’lib bu loihada fullstack texnalogiyalar ishlatilgan'} number={'Batafsil Ma’lumot Olish Uchun'} />
            <LoyihalarCard img={loyihalar} img1={react} info={'Turizm uchun web site. Bunda ishlatilgan texnalogiyalar react js , typescript , chakra ui va boshqa texnalogiyalar tanshish uchun quydagi tugmani bosing.'} text={'Qaysidur markaz uchun loiha qilingan bo’lib bu loihada fullstack texnalogiyalar ishlatilgan'} number={'Batafsil Ma’lumot Olish Uchun'} />
            <LoyihalarCard img={loyihalar} img1={react} info={'Turizm uchun web site. Bunda ishlatilgan texnalogiyalar react js , typescript , chakra ui va boshqa texnalogiyalar tanshish uchun quydagi tugmani bosing.'} text={'Qaysidur markaz uchun loiha qilingan bo’lib bu loihada fullstack texnalogiyalar ishlatilgan'} number={'Batafsil Ma’lumot Olish Uchun'} />
            <LoyihalarCard img={loyihalar} img1={react} info={'Turizm uchun web site. Bunda ishlatilgan texnalogiyalar react js , typescript , chakra ui va boshqa texnalogiyalar tanshish uchun quydagi tugmani bosing.'} text={'Qaysidur markaz uchun loiha qilingan bo’lib bu loihada fullstack texnalogiyalar ishlatilgan'} number={'Batafsil Ma’lumot Olish Uchun'} />
            <LoyihalarCard img={loyihalar} img1={react} info={'Turizm uchun web site. Bunda ishlatilgan texnalogiyalar react js , typescript , chakra ui va boshqa texnalogiyalar tanshish uchun quydagi tugmani bosing.'} text={'Qaysidur markaz uchun loiha qilingan bo’lib bu loihada fullstack texnalogiyalar ishlatilgan'} number={'Batafsil Ma’lumot Olish Uchun'} />
            <LoyihalarCard img={loyihalar} img1={react} info={'Turizm uchun web site. Bunda ishlatilgan texnalogiyalar react js , typescript , chakra ui va boshqa texnalogiyalar tanshish uchun quydagi tugmani bosing.'} text={'Qaysidur markaz uchun loiha qilingan bo’lib bu loihada fullstack texnalogiyalar ishlatilgan'} number={'Batafsil Ma’lumot Olish Uchun'} />
            <LoyihalarCard img={loyihalar} img1={react} info={'Turizm uchun web site. Bunda ishlatilgan texnalogiyalar react js , typescript , chakra ui va boshqa texnalogiyalar tanshish uchun quydagi tugmani bosing.'} text={'Qaysidur markaz uchun loiha qilingan bo’lib bu loihada fullstack texnalogiyalar ishlatilgan'} number={'Batafsil Ma’lumot Olish Uchun'} />
            <LoyihalarCard img={loyihalar} img1={react} info={'Turizm uchun web site. Bunda ishlatilgan texnalogiyalar react js , typescript , chakra ui va boshqa texnalogiyalar tanshish uchun quydagi tugmani bosing.'} text={'Qaysidur markaz uchun loiha qilingan bo’lib bu loihada fullstack texnalogiyalar ishlatilgan'} number={'Batafsil Ma’lumot Olish Uchun'} />
            <LoyihalarCard img={loyihalar} img1={react} info={'Turizm uchun web site. Bunda ishlatilgan texnalogiyalar react js , typescript , chakra ui va boshqa texnalogiyalar tanshish uchun quydagi tugmani bosing.'} text={'Qaysidur markaz uchun loiha qilingan bo’lib bu loihada fullstack texnalogiyalar ishlatilgan'} number={'Batafsil Ma’lumot Olish Uchun'} />
            <LoyihalarCard img={loyihalar} img1={react} info={'Turizm uchun web site. Bunda ishlatilgan texnalogiyalar react js , typescript , chakra ui va boshqa texnalogiyalar tanshish uchun quydagi tugmani bosing.'} text={'Qaysidur markaz uchun loiha qilingan bo’lib bu loihada fullstack texnalogiyalar ishlatilgan'} number={'Batafsil Ma’lumot Olish Uchun'} />
        </Box>
      </Box>
    </Box>
  )
}

export default LoyihalarComponents


