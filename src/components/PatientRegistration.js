import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';

function PatientRegistration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    mobile: '',
    city: '',
    password: '',
    confirmPassword: ''
  });

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form input before submission
    if (!formData.firstName || !formData.lastName || !formData.gender || !formData.email || !formData.mobile || !formData.city|| !formData.password || !formData.confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }


    // Handle form submission here
    console.log('Submitted form:', formData);

    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      gender: '',
      email: '',
      mobile: '',
      city: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className='patient'>
    <form className='form-container' onSubmit={handleSubmit}>
    <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <img  style={{marginLeft :'40%'}}src='logo.png' alt='e-mantrana'></img>
         </Typography>
        </Toolbar>
       </AppBar>
       <div className='header' style={{ display:'flex',justifyContent: 'center',color:'white',padding: 80}}><h1>PATIENT  REGISTRATION</h1></div>
      <div style={{ display: "flex", flexWrap:'wrap',flexDirection:'column', gap: '16px', justifyContent: 'center',alignItems:'center'}}>
        <div style={{ flex: "1 1 50%", marginBottom: '40px' }}>
          <TextField
            style={{ width: 400, marginRight: '80px', backgroundColor: '#faebd7' }}
            id="firstName"
            label="Enter First Name"
            value={formData.firstName}
            onChange={handleFormChange}
          />
          <TextField
            style={{ width: 400, backgroundColor: '#faebd7' }}
            id="lastName"
            label="Enter Last Name"
            value={formData.lastName}
            onChange={handleFormChange}
          />

        </div>
        <div style={{ flex: "1 1 50%", marginBottom: '40px' }}>
          <FormControl style={{ width: 400, marginRight: '80px', backgroundColor: '#faebd7' }}>
            <InputLabel id="gender-label">Select Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              value={formData.gender}
              onChange={handleFormChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            style={{
              width: 400, backgroundColor: '#faebd7'
            }}
            id="email"
            label="Enter Email"
            type="email"
            value={formData.email}
            onChange={handleFormChange}
          />
        </div>
        <div style={{ flex: "1 1 50%", marginBottom: '40px' }}>
          <TextField
            style={{ width: 400, marginRight: '80px', backgroundColor: '#faebd7' }}
            id="mobile"
            label="Enter Mobile Number"
            type="tel"
            value={formData.mobile}
            onChange={handleFormChange}
          />
      <TextField
        style={{ width: 400, backgroundColor:'#faebd7' }}
        id="city"
        label="Enter Your City"
        value={formData.city}
        onChange={handleFormChange}
      />
    </div>
    <div style={{ flex: "1 1 50%", marginBottom: '40px' }}>
          <TextField
            style={{ width: 400, marginRight: '80px', backgroundColor: '#faebd7' }}
            id="password"
            label="Enter Password"
            value={formData.password}
            onChange={handleFormChange}
          />
          <TextField
            style={{ width: 400, backgroundColor: '#faebd7' }}
            id="confirmPassword"
            label="Confirm Paasword"
            value={formData.confirmPassword}
            onChange={handleFormChange}
          />
        </div>
    </div>
<Button style={{width: 120,height:50,backgroundColor:'darkgray', borderRadius: 25 }} variant="contained" color="success" type="submit">
<h3 style={{color:'black'}}>SEND OTP</h3>
</Button>
</form>
<Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
      <h3 style={{color:'Darkgray'}}>Need help?Contact us at <a style={{color:'red'}} href="tel:6265161019">123-456-7890</a> or <a  style={{color:'red'}} href="shivamdogaya07@gmail.com">support@example.com</a>.</h3>
 </Typography>
</div>

  );
}
export default PatientRegistration;