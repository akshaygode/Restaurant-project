import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Box,
   Table,
   TableContainer,
   Paper, 
   TableBody,
    TableCell,
     TableHead,
      TableRow,
       Typography } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
<Box sx={{ my: 5, ml: 10, "& h4": { fontWeight:"bold", mb: 2 }}}>
  <Typography variant='h4'>
    Contact My Restaurant
  </Typography>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem voluptatem asperiores deserunt, ut maxime nobis quas a blanditiis nostrum non quisquam rerum sit laudantium veniam soluta maiores facilis natus praesentium veritatis. Tenetur vero culpa reiciendis adipisci modi eius dolorem distinctio quos nisi velit doloremque ab aspernatur id repellendus similique at aliquam dignissimos voluptate laboriosam perspiciatis alias, eveniet sit! Blanditiis, sit autem. Beatae ipsa, ea dolorum nam incidunt architecto consequatur inventore fugit officia officiis numquam facilis dignissimos at nostrum est porro atque ad iusto, sit impedit ratione laudantium? Enim fugit repudiandae eligendi nostrum ea possimus nobis sapiente beatae voluptatibus repellendus.
  </p>
</Box>
<Box sx={{m:3, width:"600px",ml:10, "@media (max-width:600px)":
{
  width:"300px"
}}}>
<TableContainer component={Paper}>
  <Table aria-label='contact table'>
<TableHead>
  <TableRow>
    <TableCell sx={{bgcolor:'black',color:'white',}}align="center">
      Contact Details
    </TableCell>
  </TableRow>
</TableHead>

<TableBody>
  <TableRow>
<TableCell>
  <SupportAgentIcon sx={{color:'red', pt:1}} />  1800-00-0000
  </TableCell> 
 
   </TableRow>
   <TableRow>
   <TableCell>
  <EmailIcon sx={{color:'skyblue', pt:1}} /> help@myrest.com
  </TableCell>
   </TableRow>
   <TableRow>
   <TableCell>
  <CallIcon sx={{color:'green', pt:1}} /> 1234567890
  </TableCell>
   </TableRow>
  </TableBody> 
   </Table>


</TableContainer>

</Box>
    </Layout>
  )
}

export default Contact
