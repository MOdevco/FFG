import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import PortfolioCard from '../portfolioCard/portfolioCard'

const AdminMainPortfolio = () => {
  return (
    <Box>
        <Box>
            <Box>
                <Text color={'#8E8E8E'}>Portfolio</Text>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
                <PortfolioCard />
                <PortfolioCard />
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
                <PortfolioCard />
                <PortfolioCard />
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
                <PortfolioCard />
                <PortfolioCard />
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
                <PortfolioCard />
                <PortfolioCard />
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
                <PortfolioCard />
                <PortfolioCard />
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
                <PortfolioCard />
                <PortfolioCard />
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
                <PortfolioCard />
                <PortfolioCard />
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
                <PortfolioCard />
                <PortfolioCard />
            </Box>
        </Box>
    </Box>
  )
}

export default AdminMainPortfolio