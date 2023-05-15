import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function CitySearch() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{backgroundColor:'secondary.main', borderRadius: '6px', pl: 1, pr: 1}}>
      <Button onClick={handleClick} endIcon={<ArrowDropDownIcon />} sx={{textTransform: 'unset', fontSize:'12px'}}>
        Select City
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemText primary="Beirut" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText primary="Jbeil" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText primary="Sidon" />
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default CitySearch;
