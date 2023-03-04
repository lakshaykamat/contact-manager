import { Typography } from '@mui/material'
import React from 'react'
import ContactCard from './ContactCard'
const ContactPage = (props) => {
  return (
    <div>
        {props.contacts.length === 0 && <Typography variant='h1'>No Contacts Added</Typography>}
        {props.contacts.map((item,index)=>{
            return <ContactCard 
            key={index} 
            name={item.name}
            number={item.number} />
        })}
    </div>
  )
}

export default ContactPage
