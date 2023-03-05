import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import ContactCard from './ContactCard'
const ContactPage = (props) => {
  return (
    <div>
      <Stack sx={{margin:'1rem 3rem'}}>
      {props.contacts.length != 0 && <Typography variant='h6' textAlign={'right'} >Total Contacts {props.contacts.length}</Typography>}
        {props.contacts.length === 0 && <Typography textAlign={'center'} variant='h4'>No Contacts Added</Typography>}
      </Stack>
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
