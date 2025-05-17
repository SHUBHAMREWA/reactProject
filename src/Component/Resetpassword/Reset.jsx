import { Box, Button, Typography, Container } from '@mui/material';
import { useAnimate } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Reset =()=>{

    const adminReducer  = useSelector(res=>res.adminReducer)
    const navigate = useNavigate()


    const handleConfirm =()=>{
         
        navigate("/forgot-password")
    }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: adminReducer.dark ? "black"  : "white", // yellow to light orange
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: adminReducer.dark ? " #1d1d1d" : "white",
          borderRadius: 3,
          boxShadow: 5,
          textAlign: 'center',
          py: 5,
        }}
      >
        <Typography
        color='primary'
         variant="h5" mb={3} fontWeight="bold">
          Do you want to proceed?
        </Typography>
        <Button
          variant="contained"
          onClick={handleConfirm}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '16px',
            borderRadius: 3,
            background: 'linear-gradient(to right, #ff8f00, #ffca28)',
            color: '#fff',
            fontWeight: 'bold',
            '&:hover': {
              background: 'linear-gradient(to right, #ff6f00, #ffc107)',
            },
          }}
        >
          Confirm
        </Button>
      </Container>
    </Box>
  );
};


export default Reset;

