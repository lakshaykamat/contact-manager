import { Card, Typography } from '@mui/material'
import {Stack } from '@mui/system'
import React from 'react'

const ContactCard = ({name,number}) => {
  return (
<Card sx={{padding:'1rem',margin:'1rem auto' ,maxWidth:'500px'}}>
    <Stack direction={'row'} alignItems={'center'}>
    <img style={{borderRadius:'50%',maxWidth:'15%'}} src='/src/assets/profilepic/blankpfp.jpg'/>
    <Stack direction={'column'} spacing={'3'} sx={{margin:"1rem"}}>
    <Typography variant='h5'>{name}</Typography>
    <Typography variant='p'>{number}</Typography>
    </Stack>
    </Stack>
</Card>
  )
}

export default ContactCard
