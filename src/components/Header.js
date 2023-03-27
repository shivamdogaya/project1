import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
const Header = () => {
  return (
    <div>
       <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <img  style={{marginLeft :'40%'}}src='logo.png' alt='e-mantrana'></img>
         </Typography>
        </Toolbar>
       </AppBar>
    </div>
  )
}

export default Header;