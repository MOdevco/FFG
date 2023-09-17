import { Box, Button, FormErrorMessage, FormHelperText, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { logo } from '../../assets'
import {TiLocation} from 'react-icons/ti'
import {AiTwotoneMail} from 'react-icons/ai'
import {FaPhoneVolume, } from 'react-icons/fa6'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import {deviceDetect,mobileModel} from "react-device-detect"
function Footer() {
    const TOKENN = '6574594143:AAF2cri1SgC41GkQs-InV_frBBgFfFLASCI';
    const CHAT_ID = '-1001961634320'
    const [val , setVal] = useState('')
    const toast = useToast()
    const dataTime = new Date()
    const day = dataTime.getDay() < 10 ? '0' +  dataTime.getDay() : dataTime.getDay() 
    const month = dataTime.getMonth()  < 10 ? '0' +  dataTime.getMonth()  : dataTime.getMonth() 
    const year = dataTime.getFullYear()
    const fullYearResult = day + '-' + month + '-' + year
    const hour = dataTime.getHours() < 10 ? '0' +  dataTime.getHours() : dataTime.getHours()
    const minute = dataTime.getMinutes()< 10 ? '0' +  dataTime.getMinutes() : dataTime.getMinutes()
    const secunde = dataTime.getSeconds() < 10 ? '0' +  dataTime.getSeconds() : dataTime.getSeconds()
    const minSecunde = dataTime.getMilliseconds() < 10 ? '0' +  dataTime.getMilliseconds() : dataTime.getMilliseconds()
    const fullTimeResult = hour + ':' + minute + ':' + secunde + ':' + minSecunde

    const handleSubmit = () => {
        let mess = `Yangi email\n\n`
        mess += `Sana: ${fullYearResult}\n`
        mess += `Vaqt: ${fullTimeResult}\n`
        mess += `Email: ${val}\n`
        if(deviceName.length > 1){
            mess += `Qurilma vendori : ${deviceName}\n`
        }else{
            console.log('hato');
        }
        if(deviceOs.length > 1){
            mess += `Qurilma os : ${deviceOs}\n`
        }else{
            console.log('hato');
        }
        
        mess += `Quilma Modeli: ${deviceModel}\n`


        if(val.includes('@gmail.com')) {
            axios.post('https://api.telegram.org/bot' + TOKENN + '/sendMessage' , {
                chat_id: CHAT_ID,
                parce_mode: 'html',
                text: mess
            }).then((res) => {
                setVal('')
                toast({
                    position: 'top',
                    title: 'Emailingiz yuborildi',
                    status: 'success',
                    containerStyle: {
                      width: '800px',
                      maxWidth: '100%',
                    },
                })
            })
        } else{
            toast({
                position: 'top',
                title: 'Sizning emailigiz hato',
                status: 'error',
                containerStyle: {
                  width: '800px',
                  maxWidth: '100%',
                },
            })
        }
    }


    
    // const deviceName = navigator.userAgent;
    // const deviceModel = navigator.platform;
    // const getDeviceNameAndModel = () => {
    //     const userAgent = navigator.userAgent;
    //     const platform = navigator.platform;
    
    //     let deviceName = 'Unknown Device';
    
    //     // Kompyuter
    //     if (/Windows/.test(userAgent)) {
    //       deviceName = userAgent.match(/Windows NT [\d.]+/)?.[0] || 'Unknown Device';
    //     } else if (/Mac/.test(userAgent)) {
    //       deviceName = userAgent.match(/Mac OS X [\d_]+/)?.[0] || 'Unknown Device';
    //     } else if (/Linux/.test(platform)) {
    //       deviceName = 'Linux Device';
    //     }
    //     // Android
    //     else if (/Android/.test(userAgent)) {
    //       deviceName = userAgent.match(/Android [\d.]+; [\w\s-]+/)?.[0] || 'Unknown Device';
    //     }
    //     // iPhone
    //     else if (/iPhone/.test(userAgent)) {
    //       deviceName = userAgent.match(/iPhone\s[\w\d]+/i);
    //     }
    //     // Huawei
    //     else if (/Huawei/.test(userAgent)) {
    //       deviceName = userAgent.match(/Huawei[\w\s-]+/)?.[0] || 'Unknown Device';
    //     }
    //     // Pixel
    //     else if (/Pixel/.test(userAgent)) {
    //       deviceName = userAgent.match(/Pixel[\w\s-]+/)?.[0] || 'Unknown Device';
    //     }



    //     return deviceName
    // }
    // const getDeviceNameAndModel = () => {
    //     const userAgent = navigator.userAgent;
    //     const iPhoneModel = userAgent.match(/iPhone\s([\w\d]+)/i);
    //     const iPhoneName = userAgent.match(/(iPhone\s[\w\d]+)/i);
    //     const platform = navigator.platform;
    //     let deviceName = 'Unknown Device';
    
    //     // Kompyuter
    //     if (/Windows/.test(userAgent)) {
    //               deviceName = userAgent.match(/Windows NT [\d.]+/)?.[0] || 'Unknown Device';
    //             } else if (/Mac/.test(userAgent)) {
    //               deviceName = userAgent.match(/Mac OS X [\d_]+/)?.[0] || 'Unknown Device';
    //             } else if (/Linux/.test(platform)) {
    //               deviceName = 'Linux Device';
    //             }
    //     // Android
    //     else if (/Android/.test(userAgent)) {
    //       deviceName = userAgent.match(/Android [\d.]+; [\w\s-]+/) || 'Unknown Device';
    //     }
    //     // iPhone XS SE
    //     else if (/iPhone/.test(userAgent)) {
    //       deviceName = userAgent.match(/iPhone\s[\w\d]+/i) || '';
    //     }
        
    
    //     return deviceName[0];
    //   };
    // getDeviceNameAndModel()

    useEffect(() => {
        console.log("devicedata deviceDetect", deviceDetect()) // gives object shown in image below
        console.log("devicedata browserName", mobileModel) // gives "iphone"
       },[])
       const userAgent = deviceDetect().userAgent
       const deviceModel = deviceDetect().model || userAgent
       const deviceOs = deviceDetect().os || ''
       const deviceName = deviceDetect().vendor || ''
       console.log(deviceModel);
       console.log(deviceOs);
       console.log(deviceName);
  return (
    <Box className='bg' pt={{md:'40px', '2xl': '50px', base: '0px'}}>
        <Box className='border' mt={{md:'40px', '2xl': '120px'}} bg={'#D2E6E4'} pb={{md :'40px', '2xl': '0', base: '10px'}} w={'100%'} h={{'2xl': '50vh'}}>
            <Box w={{md: '80%', base: '90%'}} m={'auto'} display={'flex'} flexDirection={{lg :'row', base: 'column'}} alignItems={{'2xl':'center', base: 'left', lg: 'center'}} gap={{'2xl': '2rem', base: '20px', xl :'2rem'}} >
                <Box pt={{'2xl':'100px', md: '60px', base: '30px'}} display={'flex'}  flexDirection={'column'} gap={{'2xl': '2rem', base: '0.5rem'}}>
                    <Heading fontSize={{base: '30px', md: '50px'}} fontWeight={'700'}  color={'#0B7077'}>DataSpin</Heading>
                    <Text cursor={'pointer'} display={'flex'} alignItems={'center'} gap={'10px'} color={'#0B7077'}><TiLocation /> Farg’ona viloyati Quva Tumani.</Text>
                    <Text display={'flex'} alignItems={'center'} gap={'10px'} color={'#0B7077'}><FaPhoneVolume /><a href='tel:+99855 809  13 28'>Tel :+99855 809 13 28</a> </Text>
                    <Text display={'flex'} alignItems={'center'} gap={'10px'} color={'#0B7077'} cursor={'pointer'}><AiTwotoneMail />Email: Data_Spin-group@gmail.com</Text>
                </Box>
                <Box pl={{'2xl': '180px'}} pt={{'2xl':'100px', md: '0px', lg: '70px'}} display={'flex'} flexDirection={'column'} gap={{'2xl': '1.5rem', base: '0.5rem'}}>
                    <Text color={'Shartnoma'} fontWeight={'700'}>Shartnoma</Text>
                    <Text cursor={'pointer'} _hover={{color: 'gray'}} transition={'.3s'} color={'#0B7077'}>Shartnoma</Text>
                    <Text cursor={'pointer'} _hover={{color: 'gray'}} transition={'.3s'} color={'#0B7077'}>Hamkorlik</Text>
                    <Text cursor={'pointer'} _hover={{color: 'gray'}} transition={'.3s'} color={'#0B7077'}>Ish bo’yicha shartlar</Text>
                </Box>
                <Box pl={{'2xl': '80px'}} pt={{'2xl':'100px', md: '0px', lg: '70px'}} display={'flex'} flexDirection={'column'} gap={{'2xl': '1.5rem', base: '0.5rem'}}>
                    <Text color={'Shartnoma'} fontWeight={'700'}>Bo’limlar</Text>
                    <Text cursor={'pointer'} _hover={{color: 'gray'}} transition={'.3s'} color={'#0B7077'}>Biz haqimizda</Text>
                    <Text cursor={'pointer'} _hover={{color: 'gray'}} transition={'.3s'} color={'#0B7077'}>Loihalar</Text>
                    <Text cursor={'pointer'} _hover={{color: 'gray'}} transition={'.3s'} color={'#0B7077'}>Biz bilan a’loqa</Text>
                </Box>

                <Box pl={{'2xl': '100px'}} mt={{'2xl': '100px'}} pt={{base: '20px'}} display={'flex'} flexDirection={'column'} alignItems={{'2xl':'center', md: 'flex-start'}}>
                    <Text>Email manzilingizni qoldiring</Text>
                    <Box className='inputbox' rounded={'15px'} w={{'2xl': '400px', base: '50%', md: '360px'}} display={'flex'} alignItems={'center'} h={'73px'} bg={'#fff'}>
                        <Input value={val} onChange={(e) => setVal(e.target.value)}  pl={{md:'20px', base: '10px'}} w={{md: '225px', base: '80%', '2xl': '290px'}} variant='unstyled' type='email' required placeholder='Email' h={'73px'} />
                        <Button className='btn' onClick={handleSubmit} type='submit' w={'100px'}  _hover={''} mr={{base: '20px'}} ml={{md:'10px', base: '0'}} rounded={'20px'} h={'50px'} bg={'#0B7077'} color={'#fff'}>Send</Button>
                    </Box>
                </Box>

            </Box>
            <Heading fontSize={'20px'}  fontWeight={'500'} textAlign={'center'} pt={{'2xl': '120px', base: '30px'}}  color={'#0B7077'}>Data Spin Barcha Huquqlarda Himoyalangan</Heading>
        </Box>
    </Box>
  )
}

export default Footer