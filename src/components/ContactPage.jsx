import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import ContactCard from './ContactCard'
const ContactPage = (props) => {
  return (
    <div style={{margin:'1rem'}}>
      <Stack sx={{margin:'1rem 3rem'}}>
      {props.contacts.length != 0 && <Typography variant='h6' textAlign={'right'} >Total Contacts {props.contacts.length}</Typography>}
        {props.contacts.length === 0 && <Typography textAlign={'center'} variant='h4'>No Contacts Added</Typography>}
      </Stack>
        {props.contacts.map((item,index)=>{

            return <ContactCard 
            key={index} 
            name={item.name}
            number={item.number}
            img={item.img ? item.img : "https://i.pinimg.com/564x/d4/74/1c/d4741cb779ddec6509ca1ae0cb137a7d.jpg"} />
        })}
    </div>
  )
}

export default ContactPage
