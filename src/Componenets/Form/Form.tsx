import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField/TextField';
import EastIcon from '@mui/icons-material/East';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const Form = () => {
  return (
    <div >
          <Card className=' mt-36 p-5 ' sx={{ width:"400px", background:"linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)" }}>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      Fill out the form.
        </Typography>
        <p>Our team will touch base with you within 24 hours.</p>
        <div>
        <div className=' justify-around space-x-2'>
        <TextField
        className='w-36 '
          id="name"
          label="Full Name*"
          type="text"
          variant="standard"
        />
        <TextField
        className='w-36 '
          id="email"
          label="Email ID*"
          type="email"
          variant="standard"
        />
        <TextField
        className=' w-36 '
          id="country"
          label="Country"
          type="text"
          variant="standard"
        />
     
        <TextField
       className=' w-36'
          id="contactNumber"
          label="Contact Number"
          type="text"
          variant="standard"
        />
            <TextField
            className=' w-full'
          id=""
          label="Tell us your requirements*"
          multiline
          maxRows={4}
          variant="standard"
        />
     
      </div>
        </div>
      </CardContent>
      <CardActions>
      <div className=" flex justify-start items-start gap-1">
        <div className="w-20 h-10 bg-[#181818] rounded-3xl truncate border border-[#252525] border-solid  justify-center items-center gap-2 flex">
            <div className=" text-center text-white text-sm font-jakarta font-semibold leading-5 break-words">Submit</div>
        </div>
        <div className=" w-12 h-10 relative">
            <div className="w-12 h-10 text-center  absolute bg-[#181818] rounded-full border border-[#252525] text-white border-solid"><EastIcon className=' mt-2' /></div>
          
        </div>
    </div>
      </CardActions>
    </Card>
    </div>
  )
}

export default Form