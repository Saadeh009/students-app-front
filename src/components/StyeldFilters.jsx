import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem, Typography, ListItemText } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function StyledFilters({type}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{backgroundColor:'transparent', borderRadius: '6px', pl: 1, pr: 1}}>
      <Button onClick={handleClick} sx={{color: 'secondary.main', textTransform: 'capitalize', fontSize: '9px' }} endIcon={<ArrowDropDownIcon />} >
        filter by {type}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} sx={{display:'flex', flexDirection:'column'}}>
          <ListItemText> <Typography sx={{ fontSize: '12px', py:1 }}>dummy 1</Typography> </ListItemText>
          <ListItemText> <Typography sx={{ fontSize: '12px', py:1 }}>dummy 2</Typography> </ListItemText>
          <ListItemText> <Typography sx={{ fontSize: '12px', py:1 }}>dummy 3</Typography> </ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default StyledFilters;