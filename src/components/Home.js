import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Home() {

const navigate = useNavigate();

  return (
    <div className='home'>
         <Header />
      <div className='btn' >
      <Button onClick={()=>{navigate("/PatientRegistration")}} style={{width:400 ,margin:50,height:50, backgroundColor: '#faebd7',color:'black',boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', borderRadius: 25 }} variant="contained" color="success"><h3>Patient registration</h3></Button>
      <Button  onClick={()=>{navigate("/PatientLogin")}} style={{width:400,margin:50,height:50,backgroundColor: '#faebd7',color:'black',boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', borderRadius: 25 }} variant="contained" color="success"><h3>Patient login</h3></Button>
      <Button  onClick={()=>{navigate("/DoctorLogin")}} style={{width:400 ,margin:50,height:50,backgroundColor: '#faebd7',color:'black',boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', borderRadius: 25 }} variant="contained" color="success"><h3>Doctor Login</h3></Button>
      </div>   
      </div>
  );
}

export default Home;
