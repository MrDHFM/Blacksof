import React from 'react'
import EastIcon from '@mui/icons-material/East';
import logo from '../../Images/logo.svg'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';




const Header = () => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div >
        <div className=" w-full h-full justify-center items-center inline-flex  gap-80">
    <div className=" w-20 flex justify-start items-center">
        <div className=" w-32 h-14 relative">
            <img className="w-32 h-14 left-0 top-0 absolute" src={logo} />
        </div>
    </div>
    <Box  sx={{ color:"yellow" }} className='text-white'>
      <TabContext   value={value} >
        <Box  className='text-white' sx={{ borderBottom: 1, borderColor: 'divider',color:"white" }}>
          <TabList TabIndicatorProps={{
    style: {
      backgroundColor:"black"
    }
  }}  onChange={handleChange} className=' text-white' aria-label="lab API tabs example">
            <Tab  label={<span className='text-white' >Solutions</span>} value="1" className=' text-white' />mnsbdncb
            <Tab label={<span className='text-white' >Services</span>} value="2" className='text-white' />
            <Tab label={<span className='text-white' >About</span>} value="3" className='text-white' />
            <Tab label={<span className='text-white' >Culture</span>} value="4" className='text-white' />

          </TabList>
        </Box>
      </TabContext>
    </Box>
    {/* <div className="  flex items-center justify-between bg-slate-600">
        <div className=" flex items-center justify-between space-x-3  absolute  shadow-lg rounded-full">
        <div className="  text-white text-sm font-jakarta font-medium ">Solutions</div>
        <div className="  text-white text-sm font-jakarta font-medium ">Services</div>
        <div className="   text-white text-sm font-jakarta font-medium ">About</div>
        <div className="  text-white text-sm font-play font-normal ">Culture</div></div>
    </div> */}
    <div className=" flex justify-start items-start gap-1">
        <div className="w-20 h-10 bg-[#252525] rounded-3xl truncate border border-[#252525] border-solid  justify-center items-center gap-2 flex">
            <div className=" text-center text-white text-sm font-jakarta font-semibold leading-5 break-words">Contact us</div>
        </div>
        <div className=" w-12 h-12 relative">
            <div className="w-12 h-12 text-center  absolute bg-[#252525] rounded-full border border-[#252525] text-white border-solid"><EastIcon className=' mt-3' /></div>
          
        </div>
    </div>
</div>

{/* 
        <AppBar position="static" sx={{ backgroundColor:""}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         <Avatar sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={logo} />
       

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar src={logo} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
   
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button variant='contained' >Contuct us</Button>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <EastIcon />
              </IconButton>
           
          
          </Box>
        </Toolbar>
      </Container>
    </AppBar> */}
    </div>
  )
}

export default Header