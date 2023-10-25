import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
<Box sx={{
  my: 15,
  textAlign:'center',
  p:2,
  "& h4":{
    fontWeight:"bold",
my:2,
fontSize:'2rem',
  },
  '& p':{
textAlign:"justify",
  },
   "@media (max-width:600px)":{
    mt:0,
    " & h4" :{
      fontSize:"1.5rem",
    }
   },
}}>
  <Typography variant='h4'> 
    Welcome to My Restaurant
  </Typography>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum tenetur corporis, provident, facilis, deleniti impedit quia debitis asperiores voluptate voluptates tempora eaque placeat unde architecto? Non nam itaque mollitia excepturi.
  </p>
  <br />
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ducimus magnam illum, debitis id sint nobis! Quam eveniet enim, nisi doloribus quibusdam facere quas molestias ullam quae ea sit, dolorum sunt consectetur fugiat facilis numquam beatae corporis tempore provident quaerat minus maxime. Est consequuntur quia ad nobis impedit natus. Sit enim iste quas provident debitis doloremque harum nemo ab earum magni possimus quam illum perspiciatis, maxime velit natus fuga, porro repellat laborum consequatur perferendis. Totam perspiciatis expedita iste qui aperiam obcaecati dolor minus, tenetur accusamus ratione non ipsam nobis in minima vel! Dolorem iste non minima maiores, quaerat doloremque praesentium?
  </p>
</Box>

    </Layout>
  )
}

export default About
