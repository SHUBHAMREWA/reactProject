import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
        bgcolor: '#e3f2fd',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        px: 2,
      }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 150 }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 120, color: '#d32f2f' }} />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Typography variant="h2" fontWeight="bold" sx={{ mt: 2 }}>
          404 - Not Found
        </Typography>
        <Typography variant="h6" sx={{ mt: 1, mb: 4, color: '#616161' }}>
          Oops! Page tumhare doston ki tarah gayab ho gaya 😅
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            textTransform: 'none',
            transition: '0.3s',
            '&:hover': {
              bgcolor: '#1976d2',
              transform: 'scale(1.05)',
            },
          }}
        >
          Go to Home
        </Button>
      </motion.div>
    </Box>
  );
};

export default PageNotFound;
