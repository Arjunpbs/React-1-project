import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4"><i><b>Fake Api</b></i></Typography>
        <Link to="/add" style={{ textDecoration: 'none' }}>
          <Button 
            variant="outlined" 
            sx={{
              color: 'white',
              borderColor: 'white',
              // Ensure marginLeft is not used, and add margin if needed
              // marginLeft: 2, 
            }}
          >
            ADD
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
