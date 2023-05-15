import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem, ListItemIcon, ListItemText, Icon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
function Hamburger() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (n) => {
    switch(n) {
      case 1:
        navigate('/')
        break;
      case 2:
        navigate('/enquiries')
        break;
        case 3:
          navigate('/favorites')
        break;
    }
    setAnchorEl(null);
  };

  return (
    <Box sx={{backgroundColor: 'transparent', borderRadius: '6px', cursor:'pointer'}}>
      <Icon onClick={handleClick} sx={{color: '#fff'}} >
       <MenuIcon />
      </Icon>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose(1)}>
          <ListItemText primary="Home" />
        </MenuItem>
        <MenuItem onClick={() => handleClose(2)}>
          <ListItemText primary="Booked Listings" />
        </MenuItem>
        <MenuItem onClick={() => handleClose(3)}>
          <ListItemText primary="Favorites" />
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Hamburger;
