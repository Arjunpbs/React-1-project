import React from 'react';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import Header from './Header';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const Add = () => {
  return (
    <>
      
      <Box sx={{ 
          backgroundColor: 'skyblue', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100vh', 
          padding: 2 
        }}>
        <h1>Add Details</h1>
        <form>
          <label>Product Name:</label><br/><br/>
          <TextField id="filled-basic" label="Product Name" variant="filled" /><br/><br/>
          <label>Category:</label><br/><br/>
          <TextField id="filled-basic" label="Category" variant="filled" /><br/><br/>
          <label>Price:</label><br/><br/>
          <TextField id="filled-basic" label="Price" variant="filled" /><br/><br/>
          <label>Image:</label><br/><br/>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ marginLeft: 5 }}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button><br/><br/><br/>
          <Button variant="contained" sx={{ marginLeft:10 }}>Add </Button>
        </form>
      </Box>
    </>
  );
}

export default Add;
