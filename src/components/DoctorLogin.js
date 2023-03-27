import { useState } from 'react';
import { TextField, Button, Link, AppBar, Toolbar, Typography } from '@mui/material';

function DoctorLogin() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.username || !formData.password) {
        alert('Please enter both username and password');
        return;
      }
    // Handle login logic here
  };

  return (
    <div>
      <div className="doctor-login">
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <img  style={{marginLeft :'40%'}}src='logo.png' alt='e-mantrana'></img>
         </Typography>
        </Toolbar>
       </AppBar>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '160px', marginBottom: '30px' }}>
          <Typography variant="h4" component="h4" gutterBottom style={{ color: 'white' }}>
            Welcome!
          </Typography>
          <Typography variant="h5" component="h5" gutterBottom style={{ color: 'white' }}>
            Please Login to Your Account
          </Typography>
        </div>
        <form style={{marginBottom:'180px'}} onSubmit={handleSubmit}>
        <TextField style={{ width: 400, marginRight: '80px', marginBottom: '30px',marginTop:'10px', margin: '30px', backgroundColor: '#faebd7' }} label="Username" variant="outlined" name="username" value={formData.username} onChange={handleInputChange} margin="normal" />
          <TextField style={{ width: 400, marginRight: '80px', margin: '30px', backgroundColor: '#faebd7' }} label="Password" variant="outlined" type="password" name="password" value={formData.password} onChange={handleInputChange} margin="normal" />
          <Button style={{ width: 120, height: 50, backgroundColor: 'darkgray', margin: '20px', borderRadius: 25 }} type="submit" variant="contained" color="primary" fullWidth>
            Sign In
          </Button>
          <Link style={{color:'black', margin: '0px' }} href="#" variant="body2">
            Forgot Password?
          </Link>
        </form>
        <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
      <h3 style={{color:'Darkgray'}}>Need help? Our support team is available 24/7 to assist you with any questions or issues you may have. Contact us at <a style={{color:'red'}} href="tel:6265161019">123-456-7890</a> or <a  style={{color:'red'}} href="shivamdogaya07@gmail.com">support@example.com</a>.</h3>
        </Typography>
      </div>
    </div>
  );
}

export default DoctorLogin;
